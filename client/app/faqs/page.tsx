'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const FAQsPage = () => {
  const faqs = [
    {
      category: 'General',
      questions: [
        {
          question: 'What services does Deekode offer?',
          answer: "Deekode offers a wide range of accounting services including tax preparation, bookkeeping, financial planning, auditing, and business consulting for both individuals and businesses."
        },
        {
          question: 'How do I schedule an appointment?',
          answer: "You can schedule an appointment by calling our office, using our online booking system on the Contact page, or sending us an email. We'll get back to you promptly to confirm your appointment."
        },
      ]
    },
    {
      category: 'Tax Services',
      questions: [
        {
          question: 'When is the deadline for filing taxes?',
          answer: 'The deadline for filing individual income tax returns is typically April 15th. However, this can vary depending on holidays and weekends. For businesses, deadlines can vary based on the type of entity and fiscal year.'
        },
        {
          question: 'What documents do I need to bring for tax preparation?',
          answer: "Generally, you should bring W-2 forms, 1099 forms, receipts for deductions, previous year's tax return, and any other income or expense documentation. The specific documents needed can vary based on your individual situation."
        },
      ]
    },
    {
      category: 'Business Services',
      questions: [
        {
          question: 'Do you offer services for startups?',
          answer: 'Yes, we offer specialized services for startups including business plan development, financial projections, tax planning, and guidance on choosing the right business structure.'
        },
        {
          question: 'Can you help with payroll management?',
          answer: 'We offer comprehensive payroll management services including payroll processing, tax filings, and generating W-2 and 1099 forms.'
        },
      ]
    },
  ]

  const [openCategories, setOpenCategories] = useState<boolean[]>([false, false, false]); // For 3 categories
  const [openQuestions, setOpenQuestions] = useState<boolean[][]>([
    [false, false], // Category 1 with 2 questions
    [false, false], // Category 2 with 2 questions
    [false, false]  // Category 3 with 2 questions
  ]);

  const toggleCategory = (index: number) => {
    setOpenCategories(prev => prev.map((isOpen, i) => i === index ? !isOpen : isOpen));
  };

  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    setOpenQuestions(prev => prev.map((category, i) =>
      i === categoryIndex
        ? category.map((isOpen, j) => j === questionIndex ? !isOpen : isOpen)
        : category
    ));
  };

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
            Frequently Asked Questions
          </motion.h1>
          <motion.p 
            className="text-xl mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Find answers to common questions about our services
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-8">
              <motion.button
                className="w-full text-left bg-gray-100 p-4 rounded-lg font-bold text-lg mb-2 focus:outline-none flex justify-between items-center"
                onClick={() => toggleCategory(categoryIndex)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {category.category}
                {openCategories[categoryIndex] ? <FaChevronUp /> : <FaChevronDown />}
              </motion.button>
              {openCategories[categoryIndex] && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                >
                  {category.questions.map((faq, questionIndex) => (
                    <div key={questionIndex} className="border-b border-gray-200 py-4">
                      <button
                        className="w-full text-left font-semibold focus:outline-none flex justify-between items-center"
                        onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                      >
                        {faq.question}
                        {openQuestions[categoryIndex]?.[questionIndex] ? <FaChevronUp /> : <FaChevronDown />}
                      </button>
                      {openQuestions[categoryIndex]?.[questionIndex] && (
                        <motion.p
                          className="text-gray-600 mt-2"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          transition={{ duration: 0.3 }}
                        >
                          {faq.answer}
                        </motion.p>
                      )}
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default FAQsPage

