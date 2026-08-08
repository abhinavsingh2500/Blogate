import express from 'express'
import { adminLogin, adminRegister, deleteCommentsById, approveComment, getAllComments, getAllBlogsAdmin, getDashboard } from '../controllers/adminController.js';
import auth from '../middleware/auth.js';

const adminRouter = express.Router()

adminRouter.post('/login', adminLogin);
adminRouter.post('/register', adminRegister);

adminRouter.get('/dashboard',auth, getDashboard);
adminRouter.get('/blogs',auth, getAllBlogsAdmin);
adminRouter.get('/comments',auth, getAllComments);
adminRouter.post('/delete-comment',auth, deleteCommentsById);
adminRouter.post('/approve-comment',auth, approveComment);

export default adminRouter; 
