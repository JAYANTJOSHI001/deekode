'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

const TestimonialsPage = () => {
  const [activeTab, setActiveTab] = useState('testimonials')

  const testimonials = [
    {
      id: 1,
      name: 'John Smith',
      company: 'Tech Innovations Inc.',
      quote: 'AccountFirm has been instrumental in helping our startup navigate complex financial challenges. Their expertise and personalized service are unmatched.',
      rating: 5,
      image: '/placeholder.svg?height=100&width=100',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      company: 'Green Energy Solutions',
      quote: "We've been working with AccountFirm for over five years now, and they've consistently provided top-notch accounting services. Highly recommended!",
      rating: 5,
      image: '/placeholder.svg?height=100&width=100',
    },
    {
      id: 3,
      name: 'Michael Lee',
      company: 'Global Trade Co.',
      quote: "AccountFirm's international tax expertise has been crucial for our expanding business. They've saved us both time and money.",
      rating: 4,
      image: '/placeholder.svg?height=100&width=100',
    },
  ]

  const caseStudies = [
    {
      id: 1,
      title: 'Startup Success: Tech Innovations Inc.',
      description: 'How AccountFirm helped a tech startup optimize their finances and secure Series A funding.',
      results: ['50% reduction in tax liability', '30% increase in operational efficiency', 'Successfully raised $5M in Series A funding'],
    },
    {
      id: 2,
      title: 'Scaling Green: Energy Solutions Growth Story',
      description: "AccountFirm's role in supporting the rapid expansion of a renewable energy company.",
      results: ['Managed 300% revenue growth over 3 years', 'Implemented cost-saving measures resulting in 20% increased profitability', 'Seamless multi-state tax compliance'],
    },
  ]

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
            Testimonials & Case Studies
          </motion.h1>
          <motion.p 
            className="text-xl mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            See how we've helped businesses achieve financial success
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-8">
            <button
              className={`px-4 py-2 mr-2 rounded-full ${activeTab === 'testimonials' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setActiveTab('testimonials')}
            >
              Testimonials
            </button>
            <button
              className={`px-4 py-2 rounded-full ${activeTab === 'caseStudies' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setActiveTab('caseStudies')}
            >
              Case Studies
            </button>
          </div>

          {activeTab === 'testimonials' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  className="bg-white p-6 rounded-lg shadow-md"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="inline text-yellow-400 mr-1" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    <FaQuoteLeft className="inline text-blue-600 mr-2" />
                    {testimonial.quote}
                  </p>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'caseStudies' && (
            <div className="space-y-8">
              {caseStudies.map((caseStudy) => (
                <motion.div
                  key={caseStudy.id}
                  className="bg-white p-6 rounded-lg shadow-md"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold mb-4">{caseStudy.title}</h3>
                  <p className="text-gray-600 mb-4">{caseStudy.description}</p>
                  <h4 className="font-bold mb-2">Key Results:</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {caseStudy.results.map((result, index) => (
                      <li key={index}>{result}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default TestimonialsPage

