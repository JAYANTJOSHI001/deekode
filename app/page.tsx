'use client'

import { motion } from 'framer-motion'
import { FaChartLine, FaCalculator, FaFileInvoiceDollar, FaHandshake, FaComments, FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import axios from 'axios'

const HomePage = () => {
  const [chatOpen, setChatOpen] = useState(false)

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Expert Accounting Services for Your Financial Success
              </motion.h1>
              <motion.p 
                className="text-xl mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                We provide professional accounting solutions to help your business thrive.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link href="/services" className="bg-white text-blue-600 py-3 px-6 rounded-full font-bold hover:bg-blue-100 transition-colors duration-300 inline-flex items-center">
                  Explore Our Services
                  <FaArrowRight className="ml-2" />
                </Link>
              </motion.div>
            </div>
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Image
                  src="/placeholder.svg"
                  alt="Professional accountant at work"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard icon={<FaChartLine />} title="Financial Analysis" description="In-depth analysis of your financial data to drive informed decisions." />
            <ServiceCard icon={<FaCalculator />} title="Tax Preparation" description="Expert tax preparation services for individuals and businesses." />
            <ServiceCard icon={<FaFileInvoiceDollar />} title="Bookkeeping" description="Accurate and timely bookkeeping to keep your finances in order." />
            <ServiceCard icon={<FaHandshake />} title="Business Consulting" description="Strategic consulting to help your business grow and succeed." />
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="bg-blue-600 text-white py-3 px-6 rounded-full font-bold hover:bg-blue-700 transition-colors duration-300 inline-flex items-center">
              View All Services
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <TestimonialSlider />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Take Control of Your Finances?</h2>
          <p className="text-xl mb-8">Book a free consultation with our expert team today.</p>
          <Link href="/contact" className="bg-white text-blue-600 py-3 px-6 rounded-full font-bold hover:bg-blue-100 transition-colors duration-300 inline-flex items-center">
            Book a Consultation
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </section>

      {/* Live Chat */}
      <div className="fixed bottom-4 right-4 z-50">
        <Chatbot />
      </div>
    </div>
  )
}

interface ServiceCardProps { 
  icon: React.ReactNode
  title: string
  description: string
}

const ServiceCard: React.FC<ServiceCardProps> =  ({ icon, title, description }) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-4xl text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link href="/services" className="text-blue-600 hover:text-blue-700 transition-colors duration-300 inline-flex items-center">
        Learn More
        <FaArrowRight className="ml-2" />
      </Link>
    </motion.div>
  )
}

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

const Chatbot = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const handleSendMessage = async () => {
      if (input.trim()) {
          const userMessage: Message = { text: input, sender: 'user' };
          setMessages(prev => [...prev, userMessage]);
          setInput('');

          try {
              const response = await axios.post('https://api.gemini.ai/v1/chat', {
                  messages: [{ role: 'user', content: input }],
              }, {
                  headers: {
                      'Authorization': `Bearer YOUR_GEMINI_API_KEY`,
                      'Content-Type': 'application/json'
                  }
              });

              const botResponse = response.data.choices[0].message.content;
              const botMessage: Message = { text: botResponse, sender: 'bot' };
              setMessages(prev => [...prev, botMessage]);
          } catch (error) {
              console.error('Error fetching Gemini API response:', error);
              setMessages(prev => [...prev, { text: 'Error fetching response from bot.', sender: 'bot' }]);
          }
      }
  };

  return (
      <div className="fixed bottom-4 right-4 z-50">
          {chatOpen ? (
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="bg-white rounded-lg shadow-xl p-4 w-80 border border-gray-300"
              >
                  <div className="flex justify-between items-center mb-4">
                      <h3 className="font-bold text-lg">Live Chat</h3>
                      <button onClick={() => setChatOpen(false)} className="text-gray-500 hover:text-red-500 text-xl">
                          &times;
                      </button>
                  </div>
                  <div className="h-64 overflow-y-auto mb-4 bg-gray-100 p-2 rounded space-y-2">
                      {messages.map((msg, index) => (
                          <div
                              key={index}
                              className={`p-2 rounded-lg max-w-xs ${msg.sender === 'user' ? 'bg-blue-500 text-white self-end' : 'bg-gray-300 text-black self-start'}`}
                          >
                              {msg.text}
                          </div>
                      ))}
                  </div>
                  <div className="flex space-x-2">
                      <input
                          type="text"
                          value={input}
                          onChange={(e) => setInput(e.target.value)}
                          placeholder="Type your message..."
                          className="flex-1 p-2 border rounded"
                      />
                      <button
                          onClick={handleSendMessage}
                          className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
                      >
                          Send
                      </button>
                  </div>
              </motion.div>
          ) : (
              <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setChatOpen(true)}
                  className="bg-blue-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
              >
                  <FaComments size={24} />
              </motion.button>
          )}
      </div>
  );
};

const TestimonialSlider = () => {
  const testimonials = [
    { id: 1, text: "AccountFirm has been instrumental in helping our business grow. Their expertise and dedication are unmatched.", author: "John Doe, CEO of TechCorp" },
    { id: 2, text: "I've been working with AccountFirm for years, and they consistently deliver excellent results. Highly recommended!", author: "Jane Smith, Founder of StartupX" },
    { id: 3, text: "The team at AccountFirm goes above and beyond. They're not just accountants; they're true partners in our success.", author: "Mike Johnson, CFO of GrowthCo" },
  ];

  const [current, setCurrent] = useState(0);
  
  const handleNext = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  // Automatically change testimonial every 4 seconds
  useEffect(() => {
    const interval = setInterval(handleNext, 4000);
    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
      <motion.div
        className="flex transition-transform"
        animate={{ x: `-${current * 100}%` }} // Animate the x position based on the current index
        transition={{ duration: 0.8, ease: "easeInOut" }} // Smooth transition with easeInOut
        style={{ width: `${testimonials.length * 100}%` }} // Ensure total width accommodates all testimonials
      >
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="w-full flex-shrink-0 px-6"
          >
            <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-6 rounded-lg shadow-md w-full sm:w-[450px] md:w-[600px] lg:w-[750px] h-auto">
              <p className="text-gray-800 text-lg italic mb-4">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <p className="font-semibold text-blue-600">{testimonial.author}</p>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Navigation Controls */}
      <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-blue-600" : "bg-gray-300"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute inset-y-0 flex items-center justify-between w-full px-4">
        <button
          onClick={handlePrev}
          className="p-2 bg-gray-200 rounded-full shadow hover:bg-gray-300"
          aria-label="Previous Testimonial"
        >
          &#8249;
        </button>
        <button
          onClick={handleNext}
          className="p-2 bg-gray-200 rounded-full shadow hover:bg-gray-300"
          aria-label="Next Testimonial"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default HomePage

