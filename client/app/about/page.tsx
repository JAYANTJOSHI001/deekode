'use client'

import { motion } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'
import Image from 'next/image'

const AboutPage = () => {
  const teamMembers = [
    { name: 'Deepak Joshi', role: 'CEO & Founder', image: 'https://res.cloudinary.com/du7a1obsy/image/upload/v1737109707/imxvnfzz03ukqyiyxw5l.jpg?height=300&width=300' },
  ]

  const certifications = [
    'Enrolled Agent (EA)',
    ' MBA in Finance',
    'Tally Certified',
    'MS Certified'
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
            About Deekode
          </motion.h1>
          <motion.p 
            className="text-xl mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Your trusted partner in financial success since 2002
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Our Story</h2>
          <p className="text-gray-600 mb-8">
          Deekode Accounting Firm is a premier financial services provider with a remarkable 23-year legacy of delivering excellence in the field of accounting and finance. Established to cater to a wide array of financial needs, the firm has become synonymous with expertise, precision, and dependability. It specializes in a comprehensive suite of services, including accounting, bookkeeping, tax preparation, payroll management, and financial consulting. These offerings are meticulously tailored to meet the diverse requirements of its client base, which spans small businesses, large corporations, and individual professionals.

          Deekode's enduring success can be attributed to its unwavering focus on quality and innovation. The firm combines deep industry knowledge with cutting-edge technology, utilizing modern accounting software and tools to ensure efficiency and accuracy in every financial solution. This forward-thinking approach enables Deekode to stay ahead of regulatory changes and evolving market demands, providing clients with a competitive edge.
          </p>
          <p className="text-gray-600 mb-8">
          Client satisfaction lies at the heart of Deekode’s philosophy. By offering personalized attention and customized strategies, the firm fosters long-term relationships built on trust and mutual success. Whether it's navigating complex tax regulations, optimizing financial processes, or devising strategies for sustainable growth, Deekode delivers results that align with each client’s unique goals.

          The firm’s commitment to excellence extends beyond its services. Deekode actively invests in professional development for its team, ensuring its staff remains well-versed in the latest industry trends and best practices. This emphasis on continuous improvement has cemented its reputation as a reliable partner in the financial world.

          With a proven track record and a steadfast dedication to innovation, Deekode Accounting Firm exemplifies what it means to be a leader in the financial services industry. Its 23 years of experience stand as a testament to its adaptability, integrity, and ability to consistently exceed client expectations in an ever-changing financial landscape.
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
              <p className="text-gray-600 text-justify">At Deekode Accounting Firm, our mission is to empower businesses and individuals by providing exceptional financial services that foster growth, efficiency, and success. We are dedicated to delivering accurate, innovative, and tailored solutions, ensuring our clients navigate their financial challenges with confidence and ease. Through our unwavering commitment to integrity, professionalism, and client-centric values, we aim to build lasting partnerships and drive meaningful impact in the communities we serve.</p>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-4">Vision</h3>
              <p className="text-gray-600 text-justify">Our vision is to be the trusted leader in financial services, recognized for our unwavering commitment to excellence, innovation, and client success. We aspire to redefine the standards of accounting and financial consulting by embracing cutting-edge technologies, fostering a culture of continuous learning, and empowering our clients to achieve their fullest potential. At Deekode Accounting Firm, we aim to create a future where financial clarity and strategic insights drive prosperity for businesses and individuals worldwide.</p>
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

