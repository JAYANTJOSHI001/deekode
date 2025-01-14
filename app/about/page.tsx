'use client'

import { motion } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'
import Image from 'next/image'

const AboutPage = () => {
  const teamMembers = [
    { name: 'John Doe', role: 'CEO & Founder', image: '/placeholder.svg?height=300&width=300' },
    { name: 'Jane Smith', role: 'Senior Accountant', image: '/placeholder.svg?height=300&width=300' },
    { name: 'Mike Johnson', role: 'Tax Specialist', image: '/placeholder.svg?height=300&width=300' },
    { name: 'Sarah Brown', role: 'Financial Advisor', image: '/placeholder.svg?height=300&width=300' },
  ]

  const certifications = [
    'Certified Public Accountant (CPA)',
    'Chartered Financial Analyst (CFA)',
    'Certified Management Accountant (CMA)',
    'Enrolled Agent (EA)',
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
            About AccountFirm
          </motion.h1>
          <motion.p 
            className="text-xl mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Your trusted partner in financial success since 1995
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Our Story</h2>
          <p className="text-gray-600 mb-8">
            Founded in 1995, AccountFirm has been providing expert accounting services to individuals and businesses for over 25 years. Our journey began with a simple mission: to help our clients achieve financial success through personalized, professional accounting services.
          </p>
          <p className="text-gray-600 mb-8">
            Over the years, we've grown from a small local firm to a respected name in the industry, serving clients across the country. Our success is built on our commitment to excellence, integrity, and continuous improvement.
          </p>
        </div>
      </section>

      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Our Mission, Vision, and Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-4">Mission</h3>
              <p className="text-gray-600">To provide exceptional accounting services that empower our clients to make informed financial decisions and achieve their goals.</p>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-4">Vision</h3>
              <p className="text-gray-600">To be the most trusted and innovative accounting firm, known for our expertise, integrity, and client-centric approach.</p>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-4">Values</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Integrity</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Excellence</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Innovation</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Client-Centric</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  width={200} 
                  height={200} 
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Our Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <motion.div 
                key={index}
                className="bg-white p-4 rounded-lg shadow-md text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <FaCheckCircle className="text-green-500 text-4xl mx-auto mb-2" />
                <p className="text-gray-600">{cert}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage

