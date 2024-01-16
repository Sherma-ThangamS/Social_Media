import Express from "express";
import { addComment,getComments} from "../controllers/comment.js";

const router=Express.Router()

router.get('/',getComments)
router.post('/', addComment);

export default router;