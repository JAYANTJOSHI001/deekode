'use client'

import { motion } from 'framer-motion'
import { FaChartLine, FaCalculator, FaFileInvoiceDollar, FaHandshake, FaUserTie, FaBuilding } from 'react-icons/fa'
import Link from 'next/link'

const ServicesPage = () => {
  const services = [
    { icon: <FaCalculator />, title: 'Tax Preparation', description: 'Expert assistance with your individual and business tax returns.' },
    { icon: <FaChartLine />, title: 'Financial Planning', description: 'Personalized strategies for your financial future.' },
    { icon: <FaFileInvoiceDollar />, title: 'Bookkeeping', description: 'Accurate and timely bookkeeping to keep your finances in order.' },
    { icon: <FaHandshake />, title: 'Business Consulting', description: 'Strategic advice to help your business grow and succeed.' },
    { icon: <FaUserTie />, title: 'Payroll Management', description: 'Efficient payroll services to ensure your employees are paid accurately and on time.' },
    { icon: <FaBuilding />, title: 'Auditing', description: 'Thorough auditing services to ensure financial accuracy and compliance.' },
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
            Our Services
          </motion.h1>
          <motion.p 
            className="text-xl mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Comprehensive accounting solutions for individuals and businesses
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Not Sure Which Service You Need?</h2>
          <p className="text-xl mb-8">Our expert team is here to help you determine the best solutions for your financial needs.</p>
          <Link href="/contact" className="bg-blue-600 text-white py-3 px-6 rounded-full font-bold hover:bg-blue-700 transition-colors duration-300">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}

interface ServiceCardProps { 
  icon: React.ReactNode
  title: string
  description: string
}
const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-md"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-4xl text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link href="/contact" className="text-blue-600 hover:underline">Learn More</Link>
    </motion.div>
  )
}

export default ServicesPage

