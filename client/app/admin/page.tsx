'use client'

import { motion } from 'framer-motion'
import { FaCheck, FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'

const AdminPage = () => {
  
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Admin Dashboard
          </motion.h1>
          <motion.p 
            className="text-xl mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Access tools and resources to manage your financial services
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Manage Your Financial Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card Component */}
            <Link href="/add-blog" className="group bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 border-t-4 border-blue-500">
              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-500">Add Blogs</h3>
              <p className="text-gray-600">Create and publish insightful financial blogs easily.</p>
              <div className="mt-4 flex items-center text-blue-500 font-semibold">
                <span>Explore</span>
                <FaArrowRight className="ml-2" />
              </div>
            </Link>

            <Link href="/check-clients" className="group bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 border-t-4 border-green-500">
              <h3 className="text-2xl font-bold mb-4 group-hover:text-green-500">Check Clients</h3>
              <p className="text-gray-600">Review client details and performance analytics.</p>
              <div className="mt-4 flex items-center text-green-500 font-semibold">
                <span>Explore</span>
                <FaArrowRight className="ml-2" />
              </div>
            </Link>

            <Link href="/analytics" className="group bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 border-t-4 border-purple-500">
              <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-500">View Analytics</h3>
              <p className="text-gray-600">Gain insights with real-time analytics and reports.</p>
              <div className="mt-4 flex items-center text-purple-500 font-semibold">
                <span>Explore</span>
                <FaArrowRight className="ml-2" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AdminPage;

