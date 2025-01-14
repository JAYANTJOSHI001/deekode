'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const LegalPage = () => {
  const [activeTab, setActiveTab] = useState('privacy')

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
            Legal Information
          </motion.h1>
          <motion.p 
            className="text-xl mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Privacy Policy and Terms of Service
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-8">
            <button
              className={`px-4 py-2 mr-2 rounded-full ${activeTab === 'privacy' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setActiveTab('privacy')}
            >
              Privacy Policy
            </button>
            <button
              className={`px-4 py-2 rounded-full ${activeTab === 'terms' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setActiveTab('terms')}
            >
              Terms of Service
            </button>
          </div>

          {activeTab === 'privacy' && (
            <div className="prose max-w-none">
              <h2>Privacy Policy</h2>
              <p>Last updated: [Date]</p>
              <p>
                AccountFirm ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by AccountFirm.
              </p>
              <h3>Information We Collect</h3>
              <p>
                We collect information you provide directly to us, such as when you create an account, submit a form, or communicate with us. This information may include your name, email address, phone number, and any other information you choose to provide.
              </p>
              <h3>How We Use Your Information</h3>
              <p>
                We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to comply with legal obligations.
              </p>
              <h3>Information Sharing and Disclosure</h3>
              <p>
                We may share your information with third-party service providers who perform services on our behalf, such as hosting, data analysis, and customer service.
              </p>
              <h3>Data Security</h3>
              <p>
                We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.
              </p>
              <h3>Changes to this Privacy Policy</h3>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
              </p>
              <h3>Contact Us</h3>
              <p>
                If you have any questions about this Privacy Policy, please contact us at [contact email].
              </p>
            </div>
          )}

          {activeTab === 'terms' && (
            <div className="prose max-w-none">
              <h2>Terms of Service</h2>
              <p>Last updated: [Date]</p>
              <p>
                Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the AccountFirm website (the "Service") operated by AccountFirm ("us", "we", or "our").
              </p>
              <h3>1. Terms</h3>
              <p>
                By accessing the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
              </p>
              <h3>2. Use License</h3>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on AccountFirm's website for personal, non-commercial transitory viewing only.
              </p>
              <h3>3. Disclaimer</h3>
              <p>
                The materials on AccountFirm's website are provided on an 'as is' basis. AccountFirm makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              <h3>4. Limitations</h3>
              <p>
                In no event shall AccountFirm or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on AccountFirm's website, even if AccountFirm or a AccountFirm authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
              <h3>5. Revisions and Errata</h3>
              <p>
                The materials appearing on AccountFirm's website could include technical, typographical, or photographic errors. AccountFirm does not warrant that any of the materials on its website are accurate, complete or current. AccountFirm may make changes to the materials contained on its website at any time without notice.
              </p>
              <h3>6. Governing Law</h3>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of [Your Country/State] and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default LegalPage

