'use client'

import { motion } from 'framer-motion'
import { FaCheck, FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'
import axios from 'axios'
import { useState } from 'react'

const PricingPage = () => {
  const pricingPlans = [
    {
      name: 'Basic',
      price: '$99/month',
      features: [
        'Personal Tax Preparation',
        'Basic Bookkeeping',
        'Quarterly Financial Reports',
        'Email Support',
      ],
    },
    {
      name: 'Professional',
      price: '$199/month',
      features: [
        'All Basic features',
        'Business Tax Preparation',
        'Monthly Financial Reports',
        'Payroll Management (up to 10 employees)',
        'Phone & Email Support',
      ],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: [
        'All Professional features',
        'Customized Financial Solutions',
        'Dedicated Account Manager',
        'On-site Consultations',
        '24/7 Priority Support',
      ],
    },
  ]

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
            Pricing Plans
          </motion.h1>
          <motion.p 
            className="text-xl mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Transparent and flexible pricing options to suit your needs
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Not Sure Which Plan Is Right for You?</h2>
          <p className="text-xl mb-8">Our expert team is here to help you determine the best solution for your financial needs.</p>
          <Link href="/contact" className="bg-blue-600 text-white py-3 px-6 rounded-full font-bold hover:bg-blue-700 transition-colors duration-300 inline-flex items-center">
            Schedule a Free Consultation
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Stay Informed About Our Services</h2>
          <p className="text-xl mb-8">Sign up for our newsletter to receive updates, financial tips, and exclusive offers.</p>
          <NewsletterSignup />
        </div>
      </section>
    </div>
  )
}


interface PricingCardProps {
  name: string;
  price: string;
  features: string[];
  highlighted?: boolean; // Optional prop to highlight the card
}

const PricingCard = ({ name, price, features, highlighted = false }: PricingCardProps) => {
  return (
    <motion.div 
      className={`bg-white p-6 rounded-lg shadow-md ${highlighted ? 'ring-2 ring-blue-600' : ''}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-2xl font-bold mb-4">{name}</h3>
      <p className="text-3xl font-bold mb-6">{price}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <FaCheck className="text-green-500 mr-2" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Link href="/contact" className={`block w-full text-center py-2 px-4 rounded-full font-bold transition-colors duration-300 ${highlighted ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}>
        Choose Plan
      </Link>
    </motion.div>
  )
}

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const subscribeNewsletter = async (email: string) => {
    try {
      const response = await axios.post('https://deekode-1.onrender.com/api/clients/subscribe', { 
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
    e.preventDefault();
    setMessage('');
    setError('');
    setIsSubmitting(true);

    try {
      const result = await subscribeNewsletter(email);
      setMessage(result.message || 'Subscribed successfully!');
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="flex">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setMessage('');
            setError('');
          }}
          placeholder="Enter your email"
          className="flex-grow px-4 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className={`bg-blue-600 text-white px-6 py-2 rounded-r-full font-bold hover:bg-blue-700 transition-colors duration-300 ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Subscribe'}
        </button>
      </div>
      {message && <p className="text-green-600 mt-2">{message}</p>}
      {error && <p className="text-red-600 mt-2">{error}</p>}
    </form>
  );
};

export default PricingPage

