import Blog from '../models/Blog.js';

const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch blogs' });
    }
};

const addBlog = async (req, res) => {
    console.log('Request Body:', req.body); // Log incoming data for debugging
    try {
        const { title, content, categories, links } = req.body;

        if (!title || !content) {
            return res.status(400).json({ error: 'Title and content are required' });
        }

        const blog = new Blog({ title, content, categories, links });
        await blog.save();
        res.status(201).json({ message: 'Blog added successfully', blog });
    } catch (err) {
        console.error('Error saving blog:', err);
        res.status(500).json({ error: 'Failed to add blog due to server error' });
    }
};


const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;
        await Blog.findByIdAndDelete(id);
        res.status(200).json({ message: 'Blog deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete blog' });
    }
};

export { getBlogs, addBlog, deleteBlog };
