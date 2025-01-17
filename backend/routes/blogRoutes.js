import express from 'express';
import { getBlogs, addBlog, deleteBlog } from '../controllers/blogController.js';

const router = express.Router();

router.get('/', getBlogs);
router.post('/', addBlog);
router.delete('/:id', deleteBlog);

export default router;