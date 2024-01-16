import Express from "express";
import {addPost, getPosts} from "../controllers/post.js";

const router=Express.Router()

router.get("/",getPosts)
router.post("/", addPost);
export default router;