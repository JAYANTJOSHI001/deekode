'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { FaSearch, FaTag, FaChevronUp, FaChevronDown } from 'react-icons/fa'

const ResourcesPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const articles = [
    {
      id: 1,
      title: '10 Tax-Saving Strategies for Small Businesses',
      excerpt: 'Discover effective ways to reduce your business tax liability and improve your bottom line.',
      category: 'Tax Planning',
      date: '2023-05-15',
    },
    {
      id: 2,
      title: 'Understanding the New Financial Reporting Standards',
      excerpt: 'Learn about the latest changes in financial reporting standards and how they affect your business.',
      category: 'Regulatory Updates',
      date: '2023-05-10',
    },
    {
      id: 3,
      title: 'Budgeting Tips for Personal Financial Success',
      excerpt: 'Practical advice on creating and sticking to a personal budget for long-term financial stability.',
      category: 'Financial Planning',
      date: '2023-05-05',
    },
    // Add more articles as needed
  ]

  const categories = ['All', 'Tax Planning', 'Regulatory Updates', 'Financial Planning']

  const filteredArticles = articles.filter(article => 
    (selectedCategory === 'All' || article.category === selectedCategory) &&
    (article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
     article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className="min-h-screen">
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Resources & Blog
          </motion.h1>
          <motion.p 
            className="text-xl mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Insights, guides, and expert advice on financial matters
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between mb-8">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">Categories</h2>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1 rounded-full text-sm ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FaSearch className="absolute right-3 top-3 text-gray-400" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map(article => (
              <motion.div
                key={article.id}
                className="bg-white p-6 rounded-lg shadow-md"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{article.date}</span>
                  <span className="flex items-center text-sm text-blue-600">
                    <FaTag className="mr-1" /> {article.category}
                  </span>
                </div>
                <Link href={`/resources/${article.id}`} className="mt-4 inline-block text-blue-600 hover:underline">
                  Read More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            <FAQItem 
              question="What are the key deadlines for tax filing?"
              answer="The main tax filing deadline for individuals is April 15th. However, there are various other deadlines throughout the year for different types of taxes and entities. It's best to consult with a tax professional to ensure you meet all applicable deadlines."
            />
            <FAQItem 
              question="How often should I review my financial plan?"
              answer="It's recommended to review your financial plan at least once a year or whenever you experience significant life changes such as marriage, having a child, or changing jobs. Regular reviews help ensure your plan remains aligned with your goals and current circumstances."
            />
            <FAQItem 
              question="What's the difference between a CPA and a regular accountant?"
              answer="A Certified Public Accountant (CPA) has met specific education and experience requirements, passed a rigorous exam, and must adhere to continuing education requirements. CPAs can perform a wider range of services and are often considered to have a higher level of expertise than non-certified accountants."
            />
            <FAQItem 
              question="How can I reduce my tax liability legally?"
              answer="There are several ways to reduce your tax liability legally, including maximizing contributions to retirement accounts, taking advantage of tax deductions and credits, and strategic timing of income and expenses. It's best to work with a tax professional to develop a personalized tax strategy."
            />
          </div>
        </div>
      </section>
    </div>
  )
}

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-4 transition-all">
      <button
        className="w-full text-left font-semibold text-lg mb-2 focus:outline-none flex justify-between items-center hover:bg-blue-50 p-2 rounded-md transition-all"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-blue-700">{question}</span>
        {isOpen ? (
          <FaChevronUp className="text-blue-500" />
        ) : (
          <FaChevronDown className="text-blue-500" />
        )}
      </button>
      {isOpen && (
        <p className="text-gray-600 text-sm leading-relaxed transition-all">{answer}</p>
      )}
    </div>
  );
};

export default ResourcesPage

