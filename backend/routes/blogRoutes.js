import express from 'express';
import { getBlogs, addBlog, deleteBlog } from '../controllers/blogController.js';

const router = express.Router();

router.get('/blogs', getBlogs);
router.post('/blogs', addBlog);
router.delete('/blogs/:id', deleteBlog);

export default router;