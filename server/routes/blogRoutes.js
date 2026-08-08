import express from "express";
import { addBlog, getAllBlogs, getBlogById, togglePublish, deleteBlogById, addComment, getBlogComments } from "../controllers/blogController.js";
import upload from "../middleware/multer.js";
import auth from "../middleware/auth.js";
 
const blogRouter = express.Router();

blogRouter.post('/add', auth, upload.single('image'), addBlog);
blogRouter.get('/all', getAllBlogs);
blogRouter.get('/get', getAllBlogs);
blogRouter.post('/delete', auth, deleteBlogById);
blogRouter.post('/delete/:id', auth, deleteBlogById);
blogRouter.get('/:blogId', getBlogById);
blogRouter.post('/toggle-publish', auth, togglePublish);
blogRouter.post('/toggle-publish/:id', auth, togglePublish);
blogRouter.post('/publish/:id', auth, togglePublish);
blogRouter.post('/add-comment', addComment);
blogRouter.post('/get-comments', getBlogComments);
blogRouter.post('/comments', getBlogComments);


export default blogRouter;



