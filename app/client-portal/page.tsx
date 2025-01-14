'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaUser, FaLock, FaFileAlt, FaUpload, FaDownload } from 'react-icons/fa'
import Link from 'next/link'

const ClientPortalPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isNewUser, setIsNewUser] = useState(false)

  useEffect(() => {
    // Check if the user is redirected from signup
    const urlParams = new URLSearchParams(window.location.search)
    setIsNewUser(urlParams.get('newUser') === 'true')
  }, [])

  const handleLogin = (e) => {
    e.preventDefault()
    // In a real application, you would validate the credentials here
    setIsLoggedIn(true)
  }

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
            Client Portal
          </motion.h1>
          <motion.p 
            className="text-xl mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Secure access to your financial documents and reports
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          {isNewUser && !isLoggedIn && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-8"
              role="alert"
            >
              <p className="font-bold">Welcome to your new account!</p>
              <p>Please log in to access your personalized client portal.</p>
            </motion.div>
          )}

          {!isLoggedIn ? (
            <div className="max-w-md mx-auto">
              <h2 className="text-3xl font-bold mb-8">Login to Your Account</h2>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaUser className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                      placeholder="Enter your username"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaLock className="text-gray-400" />
                    </div>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md font-bold hover:bg-blue-700 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  Log In
                </motion.button>
              </form>
            </div>
          ) : (
            <div>
              <h2 className="text-3xl font-bold mb-8">Welcome to Your Client Portal</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-md"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold mb-4">Your Documents</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <FaFileAlt className="text-blue-600 mr-2" />
                      <span>Q1 2023 Financial Report</span>
                      <FaDownload className="ml-auto text-gray-500 cursor-pointer" />
                    </li>
                    <li className="flex items-center">
                      <FaFileAlt className="text-blue-600 mr-2" />
                      <span>2022 Tax Return</span>
                      <FaDownload className="ml-auto text-gray-500 cursor-pointer" />
                    </li>
                    <li className="flex items-center">
                      <FaFileAlt className="text-blue-600 mr-2" />
                      <span>Business Plan 2023-2025</span>
                      <FaDownload className="ml-auto text-gray-500 cursor-pointer" />
                    </li>
                  </ul>
                </motion.div>
                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-md"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold mb-4">Upload Documents</h3>
                  <p className="text-gray-600 mb-4">Securely upload your financial documents for our team to review.</p>
                  <div className="flex items-center justify-center w-full">
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <FaUpload className="w-10 h-10 mb-3 text-gray-400" />
                        <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-gray-500">PDF, PNG, JPG or GIF (MAX. 10MB)</p>
                      </div>
                      <input id="dropzone-file" type="file" className="hidden" />
                    </label>
                  </div>
                </motion.div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default ClientPortalPage

