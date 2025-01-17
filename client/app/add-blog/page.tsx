'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaTag } from 'react-icons/fa';

const AddBlogPage = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [categories, setCategories] = useState<string[]>([]);
    const [links, setLinks] = useState<string[]>([]);
    const [linkInput, setLinkInput] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [blogs, setBlogs] = useState<{ id: number; title: string; content: string; categories: string[]; links: string[] }[]>([]);

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

    interface BlogData {
        title: string;
        content: string;
        categories: string[];  // Ensure this matches the backend expectation
        links: string[];       // Ensure this matches the backend expectation
    }
    

    interface BlogResponse {
        blog: {
            id: number;
            title: string;
            content: string;
            categories: string[];
            links: string[];
        };
    }
   

    const fetchBlogs = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/blogs/');
            if (!response.ok) {
                throw new Error('Failed to fetch blogs');
            }
            const data = await response.json();
            console.log(data);
            return data; // Return the fetched blogs
        } catch (error) {
            console.error('Error fetching blogs:', error);
            throw error; // Rethrow the error for handling in the calling function
        }
    };  
    

    const handleFetchBlogs = async () => {
        try {
            const blogsData = await fetchBlogs();
            setBlogs(blogsData);
        } catch (error) {
            alert('Failed to load blogs. Please try again.');
        }
    };

    interface FormEvent extends React.FormEvent<HTMLFormElement> {}
    const handleSubmit = async (e: FormEvent): Promise<void> => {
        e.preventDefault();
        setIsSubmitting(true);

        const blogData: BlogData = { title, content, categories, links };

        try {
            console.log('Submitting blog data:', blogData);

            // Call the function to submit the blog (assuming it exists).
            await submitBlog(blogData);

            // Reset form fields after successful submission.
            resetForm();

            // Refresh the blog list after submission.
            handleFetchBlogs();

            // Show success alert with dynamic title
            alert(`Blog titled "${title}" has been added.`);

        } catch (error) {
            // Error alert with more detailed information
            alert('Failed to submit blog. Please try again.');
            console.error('Error submitting blog:', error); // More specific error handling for debugging
        } finally {
            setIsSubmitting(false);
        }
    };

    // Function to reset form fields
    const resetForm = () => {
        setTitle('');
        setContent('');
        setCategories([]);
        setLinks([]);
    };

    // Function to submit the blog (assuming this exists and performs the actual API call)
    const submitBlog = async (blogData: BlogData): Promise<void> => {
        try {
        const response = await fetch('http://localhost:5000/api/blogs/', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(blogData),
        });
    
        if (!response.ok) {
            const errorData = await response.json();
            console.error('Server response:', errorData);
            throw new Error(`Error: ${errorData.message || 'Failed to submit blog'}`);
        }

        const data = await response.json();
        console.log('Blog submitted successfully:', data);
        return data;
        } catch (error) {
        console.error('Error submitting blog:', error);  // Log error for better debugging
        throw error;
        }
    };
        

    useEffect(() => {
        handleFetchBlogs();
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
            <section className="pb-20 bg-gray-100 px-4">
                <h2 className="text-2xl font-bold mb-8 text-center">Blogs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map(blog => (
                <motion.div
                    key={blog.id}
                    className="bg-white p-6 rounded-lg shadow-md"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                >
                    <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                    <p className="text-gray-600 mb-4">{blog.content}</p>
                    <div className="flex justify-between items-center">
                    {/* <span className="text-sm text-gray-500">{blog?.date}</span> */}
                    {blog.categories.map(category => (
                        <span key={category} className="flex items-center text-sm text-blue-600">
                        <FaTag /> {category}
                        </span>
                    ))}
                    </div>
                    <Link href={blog?.links[0]} className="mt-4 inline-block text-blue-600 hover:underline">
                    Read More
                    </Link>
                </motion.div>
                ))}
            </div>
          </section>
        </div>
    );
};

export default AddBlogPage;
