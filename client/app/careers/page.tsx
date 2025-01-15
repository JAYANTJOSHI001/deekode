'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaBriefcase, FaGraduationCap, FaClock } from 'react-icons/fa'

const CareersPage = () => {
  interface Job {
    id: number;
    title: string;
    department: string;
    type: string;
    location: string;
    description: string;
    requirements: string[];
  }
  const [activeJob, setActiveJob] = useState<Job | null>(null);


  const jobs = [
    {
      id: 1,
      title: 'Senior Accountant',
      department: 'Accounting',
      type: 'Full-time',
      location: 'New York, NY',
      description: 'We are seeking a highly skilled Senior Accountant to join our team. The ideal candidate will have extensive experience in financial reporting, tax preparation, and client advisory services.',
      requirements: [
        "Bachelor's degree in Accounting or Finance",
        'CPA certification',
        '5+ years of experience in public accounting',
        'Strong knowledge of GAAP and tax regulations',
        'Excellent communication and analytical skills',
      ],
    },
    {
      id: 2,
      title: 'Tax Specialist',
      department: 'Tax',
      type: 'Full-time',
      location: 'Chicago, IL',
      description: 'We are looking for a detail-oriented Tax Specialist to assist with tax planning and preparation for our diverse client base. The successful candidate will work closely with our senior tax professionals to deliver high-quality tax services.',
      requirements: [
        "Bachelor's degree in Accounting or related field",
        'EA or CPA certification preferred',
        '3+ years of experience in tax preparation',
        'Proficiency in tax software and Microsoft Office Suite',
        'Strong attention to detail and ability to meet deadlines',
      ],
    },
    {
      id: 3,
      title: 'Bookkeeper',
      department: 'Bookkeeping',
      type: 'Part-time',
      location: 'Remote',
      description: 'We are seeking a part-time Bookkeeper to assist with maintaining accurate financial records for our clients. The ideal candidate will have experience with various accounting software and be able to work independently.',
      requirements: [
        "Associate's degree in Accounting or related field",
        '2+ years of bookkeeping experience',
        'Proficiency in QuickBooks and other accounting software',
        'Strong organizational and time management skills',
        'Ability to work remotely and communicate effectively',
      ],
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
            Join Our Team
          </motion.h1>
          <motion.p 
            className="text-xl mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore exciting career opportunities at Deekode
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Open Positions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.map((job) => (
              <motion.div
                key={job.id}
                className="bg-white p-6 rounded-lg shadow-md cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                onClick={() => setActiveJob(job)}
              >
                <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                <p className="text-gray-600 mb-4">{job.department}</p>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <FaBriefcase className="mr-2" />
                  <span>{job.type}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <FaGraduationCap className="mr-2" />
                  <span>{job.location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {activeJob && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        >
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">{activeJob.title}</h2>
            <p className="text-gray-600 mb-4">{activeJob.department} | {activeJob.type} | {activeJob.location}</p>
            <h3 className="text-xl font-semibold mb-2">Job Description</h3>
            <p className="text-gray-600 mb-4">{activeJob.description}</p>
            <h3 className="text-xl font-semibold mb-2">Requirements</h3>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              {activeJob.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
            <div className="flex justify-end">
              <button
                className="bg-blue-600 text-white py-2 px-4 rounded-full font-bold hover:bg-blue-700 transition-colors duration-300 mr-4"
                onClick={() => window.location.href = '/contact'}
              >
                Apply Now
              </button>
              <button
                className="bg-gray-200 text-gray-700 py-2 px-4 rounded-full font-bold hover:bg-gray-300 transition-colors duration-300"
                onClick={() => setActiveJob(null)}
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      )}

      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Why Work With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <FaGraduationCap className="text-4xl text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Professional Growth</h3>
              <p className="text-gray-600">Continuous learning and development opportunities</p>
            </div>
            <div>
              <FaBriefcase className="text-4xl text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Work-Life Balance</h3>
              <p className="text-gray-600">Flexible work arrangements and competitive benefits</p>
            </div>
            <div>
              <FaClock className="text-4xl text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Collaborative Environment</h3>
              <p className="text-gray-600">Work with a team of passionate professionals</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CareersPage

