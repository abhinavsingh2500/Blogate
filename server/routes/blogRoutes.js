import express from "express";
import { addBlog, getAllBlogs, getBlogById, togglePublish, deleteBlogById } from "../controllers/blogController.js";
import upload from "../middleware/multer.js";
import auth from "../middleware/auth.js";
 
const blogRouter = express.Router();

blogRouter.post('/add', auth, upload.single('image'), addBlog);
blogRouter.get('/all', getAllBlogs);
blogRouter.get('/get', getAllBlogs);
blogRouter.post('/delete', auth, deleteBlogById);
blogRouter.get('/:blogId', getBlogById);
blogRouter.post('/toggle-publish', auth, togglePublish);

export default blogRouter;


