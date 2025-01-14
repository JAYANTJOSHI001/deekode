'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AddBlogPage = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [categories, setCategories] = useState<string[]>([]);
    const [links, setLinks] = useState<string[]>([]);
    const [linkInput, setLinkInput] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [blogs, setBlogs] = useState<{ id: number; title: string; content: string }[]>([]);

    const handleCategoryChange = (category: string) => {
        if (categories.includes(category)) {
            setCategories(categories.filter((cat) => cat !== category));
        } else {
            setCategories([...categories, category]);
        }
    };

    const handleAddLink = () => {
        if (linkInput.trim() !== '') {
            setLinks([...links, linkInput.trim()]);
            setLinkInput('');
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/blogs', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, content, categories, links }),
            });

            if (!response.ok) {
                throw new Error('Failed to submit blog');
            }

            const data = await response.json();
            alert(`Blog titled "${data.blog.title}" has been added.`);
            setTitle('');
            setContent('');
            setCategories([]);
            setLinks([]);
            fetchBlogs(); // Refresh blogs after adding a new one
        } catch (error) {
            console.error(error);
            alert('An error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const fetchBlogs = async () => {
        try {
            const response = await fetch('/api/blogs');
            if (!response.ok) {
                throw new Error('Failed to fetch blogs');
            }
            const data = await response.json();
            setBlogs(data);
        } catch (error) {
            console.error(error);
            alert('An error occurred while fetching blogs.');
        }
    };
      
    useEffect(() => {
        fetchBlogs();
    }, []);

    return (
        <div className="min-h-screen font-sans bg-gray-100">
            {/* Form Section */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20">
                <div className="container mx-auto px-4">
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Add Blog
                    </motion.h1>
                    <motion.p
                        className="text-xl mb-8"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Add a new blog post to share with your audience
                    </motion.p>
                </div>
            </section>
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
                        <div className="mb-4">
                            <label htmlFor="title" className="block text-gray-700 mb-1">Title</label>
                            <input
                                id="title"
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Enter the blog title"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="content" className="block text-gray-700 mb-1">Content</label>
                            <textarea
                                id="content"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Write your blog content here"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-1">Categories</label>
                            <div className="flex flex-wrap gap-2">
                                {['Technology', 'Lifestyle', 'Health', 'Business'].map((category) => (
                                    <label key={category} className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            value={category}
                                            checked={categories.includes(category)}
                                            onChange={() => handleCategoryChange(category)}
                                            className="form-checkbox text-blue-600"
                                        />
                                        <span>{category}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="link" className="block text-gray-700 mb-1">Links</label>
                            <div className="flex gap-2">
                                <input
                                    id="link"
                                    type="url"
                                    value={linkInput}
                                    onChange={(e) => setLinkInput(e.target.value)}
                                    className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    placeholder="Add a link (e.g., https://example.com)"
                                />
                                <button
                                    type="button"
                                    onClick={handleAddLink}
                                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                                >
                                    Add
                                </button>
                            </div>
                            {links.length > 0 && (
                                <ul className="mt-2 space-y-1">
                                    {links.map((link, index) => (
                                        <li key={index} className="text-sm text-gray-700">
                                            {index + 1}. {link}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full py-2 rounded-lg text-white transition duration-300 ${isSubmitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'}`}
                        >
                            {isSubmitting ? 'Submitting...' : 'Add Blog'}
                        </button>
                    </form>
                </div>
            </section>
            {/* Blogs List Section */}
            <section className="py-10">
                <div className="container mx-auto px-6">
                    <h2 className="text-2xl font-bold mb-4">Blogs</h2>
                    {blogs.length === 0 ? (
                        <p>No blogs available.</p>
                    ) : (
                        <ul className="space-y-4">
                            {blogs.map((blog) => (
                                <li key={blog.id} className="p-4 bg-white shadow rounded-lg">
                                    <h3 className="text-lg font-semibold">{blog.title}</h3>
                                    <p className="text-gray-600">{blog.content}</p>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </section>
        </div>
    );
};

export default AddBlogPage;
