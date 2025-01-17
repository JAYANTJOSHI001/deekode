'use client'

import Link from 'next/link'
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { useState } from 'react'
import Image from 'next/image'
import axios from 'axios'

const Footer = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const subscribeNewsletter = async (email: string) => {
    try {
      const response = await axios.post(`http://localhost:5000/api/clients/subscribe`, { 
        email,
        type: 'newsletter',        
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(error.response.data?.error || 'Subscription failed');
      } else {
        throw new Error('Subscription failed');
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const result = await subscribeNewsletter(email);
      setMessage(result.message);  // Set success message
    } catch (error) {
      if (error instanceof Error) {
        setMessage(error.message);  // Set error message
      } else {
        setMessage('An unknown error occurred');  // Handle unknown error type
      }
    }
  }

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className='space-y-4'>
            <Image src={`https://res.cloudinary.com/du7a1obsy/image/upload/v1737108396/s8ahvrknsjlc3qmlwbq8.png`} alt="Logo" width={250} height={50}/>
            <p className="text-sm">Expert accounting services for your financial success.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-blue-400 transition-colors duration-300">About Us</Link></li>
              <li><Link href="/services" className="hover:text-blue-400 transition-colors duration-300">Services</Link></li>
              <li><Link href="/pricing" className="hover:text-blue-400 transition-colors duration-300">Pricing</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/legal" className="hover:text-blue-400 transition-colors duration-300">Privacy Policy</Link></li>
              <li><Link href="/legal" className="hover:text-blue-400 transition-colors duration-300">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <form onSubmit={handleSubmit} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full p-2 text-gray-800 rounded"
                required
              />
              <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Deekode. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-400 transition-colors duration-300"><FaFacebook size={24} /></a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-300"><FaTwitter size={24} /></a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-300"><FaLinkedin size={24} /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

