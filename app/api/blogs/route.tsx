import { NextApiRequest, NextApiResponse } from 'next';

// Simulated in-memory database
let blogs: {
  id: number;
  title: string;
  content: string;
  categories: string[];
  links: string[];
}[] = [];



export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { title, content, categories, links } = req.body;

    if (!title || !content || !Array.isArray(categories) || !Array.isArray(links)) {
      return res.status(400).json({ message: 'Invalid input' });
    }

    const newBlog = {
      id: blogs.length + 1,
      title,
      content,
      categories,
      links,
    };

    blogs.push(newBlog);
    return res.status(201).json({ message: 'Blog created successfully', blog: newBlog });
  } if (req.method === 'GET') {
    return res.status(200).json(blogs);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
