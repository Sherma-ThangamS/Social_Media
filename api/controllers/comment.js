import { db } from "../connect.js"
import jwt from "jsonwebtoken";
import moment from "moment";

export const getComments = (req,res)=>{
  const q = `SELECT c.*, u.id AS userId, name, profilePic FROM comments AS c JOIN users AS u ON (u.id = c.userId)
    WHERE c.postId = ? ORDER BY c.createdAt DESC
    `;
db.query(q,[req.query.postId],(err,data)=>{
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
// console.log(req.body.postId);
}

export const addComment = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");
console.log(req.body.desc);
  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");
console.log(req.body.postId);
    const q = "INSERT INTO comments(`desc`, `postId`, `userId`,`createdAt`) VALUES (?)";
    const values = [
      req.body.desc,
      req.body.postId,
      userInfo.id,
      moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Comment has been created.");
    });
  });
}