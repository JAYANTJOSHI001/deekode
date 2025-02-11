import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    categories: [String],
    links: [String],
    createdAt: { type: Date, default: Date.now },
}, { timestamps: true });

const Blog = mongoose.model('Blog', blogSchema);
export default Blog;