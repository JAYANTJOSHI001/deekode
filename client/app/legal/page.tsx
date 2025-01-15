'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import * as Separator from "@radix-ui/react-separator";

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
            <div className="container mx-auto p-4">
             <div className="container mx-auto p-4">
              <div className="shadow-lg border rounded-md p-6">
                <header className="mb-4">
                  <h1 className="text-2xl font-bold">
                    Privacy Policy of Deekode Accounting Firm
                  </h1>
                  <p className="text-sm text-gray-500">Effective Date: 14.01.2025</p>
                </header>
                <div>
                  <p className="text-base text-gray-700">
                    At Deekode Accounting Firm, we value your privacy and are committed
                    to safeguarding the personal and financial information you entrust
                    to us. This Privacy Policy outlines how we collect, use, protect,
                    and disclose your information in compliance with applicable laws
                    and industry standards.
                  </p>

                  <Separator.Root className="my-6 h-[1px] bg-gray-300" />

                  <section>
                    <h2 className="text-lg font-semibold">1. Information We Collect</h2>
                    <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
                      <li>
                        <strong>Personal Information:</strong> Name, address, email,
                        phone number, date of birth, and identification details.
                      </li>
                      <li>
                        <strong>Financial Information:</strong> Income details, tax
                        records, bank account details, and other financial data
                        necessary for providing our services.
                      </li>
                      <li>
                        <strong>Business Information:</strong> Company details,
                        financial statements, and operational data.
                      </li>
                      <li>
                        <strong>Digital Information:</strong> IP addresses, cookies, and
                        website usage data for analytics and user experience
                        improvement.
                      </li>
                    </ul>
                  </section>

                  <Separator.Root className="my-6 h-[1px] bg-gray-300" />

                  <section>
                    <h2 className="text-lg font-semibold">2. How We Use Your Information</h2>
                    <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
                      <li>
                        Provide and enhance our financial services, including accounting,
                        tax preparation, and consulting.
                      </li>
                      <li>Comply with legal and regulatory requirements.</li>
                      <li>Communicate with you regarding updates, reports, or inquiries.</li>
                      <li>
                        Conduct internal audits, research, and analysis to improve our
                        services.
                      </li>
                    </ul>
                  </section>

                  <Separator.Root className="my-6 h-[1px] bg-gray-300" />

                  <section>
                    <h2 className="text-lg font-semibold">
                      3. Information Sharing and Disclosure
                    </h2>
                    <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
                      <li>
                        <strong>With Your Consent:</strong> When you authorize us to share
                        information with third parties.
                      </li>
                      <li>
                        <strong>Service Providers:</strong> Trusted third-party vendors
                        assisting us in delivering our services.
                      </li>
                      <li>
                        <strong>Legal Requirements:</strong> To comply with legal obligations,
                        court orders, or government regulations.
                      </li>
                      <li>
                        <strong>Protection of Rights:</strong> To protect the rights,
                        property, or safety of Deekode, our clients, or others.
                      </li>
                    </ul>
                  </section>

                  <Separator.Root className="my-6 h-[1px] bg-gray-300" />

                  <section>
                    <h2 className="text-lg font-semibold">4. Data Security</h2>
                    <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
                      <li>Encrypted data transmission and secure storage systems.</li>
                      <li>Regular security assessments and updates.</li>
                      <li>Controlled access to sensitive information.</li>
                    </ul>
                  </section>

                  <Separator.Root className="my-6 h-[1px] bg-gray-300" />

                  <section>
                    <h2 className="text-lg font-semibold">5. Your Rights</h2>
                    <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
                      <li>Access and review the personal information we hold about you.</li>
                      <li>Request corrections to inaccurate or incomplete data.</li>
                      <li>
                        Opt-out of marketing communications or specific data processing
                        activities.
                      </li>
                      <li>
                        Request the deletion of your personal information, subject to
                        legal obligations.
                      </li>
                    </ul>
                  </section>

                  <Separator.Root className="my-6 h-[1px] bg-gray-300" />

                  <section>
                    <h2 className="text-lg font-semibold">6. Retention of Information</h2>
                    <p className="text-gray-700">
                      We retain your information only as long as necessary to fulfill the
                      purposes outlined in this policy or as required by law.
                    </p>
                  </section>

                  <Separator.Root className="my-6 h-[1px] bg-gray-300" />

                  <section>
                    <h2 className="text-lg font-semibold">7. Cookies and Website Usage</h2>
                    <p className="text-gray-700">
                      Our website uses cookies to improve functionality, enhance user
                      experience, and collect analytics. You can manage cookie
                      preferences through your browser settings.
                    </p>
                  </section>

                  <Separator.Root className="my-6 h-[1px] bg-gray-300" />

                  <section>
                    <h2 className="text-lg font-semibold">8. Updates to this Policy</h2>
                    <p className="text-gray-700">
                      We may update this Privacy Policy periodically to reflect changes in
                      our practices, technology, or legal requirements. The latest version
                      will always be available on our website.
                    </p>
                  </section>

                  <Separator.Root className="my-6 h-[1px] bg-gray-300" />

                  <section>
                    <h2 className="text-lg font-semibold">9. Contact Us</h2>
                    <p className="text-gray-700">
                      If you have questions, concerns, or requests regarding this Privacy
                      Policy, please contact us:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
                      <li>Email: [Insert Email Address]</li>
                      <li>Phone: [Insert Phone Number]</li>
                      <li>Address: [Insert Physical Address]</li>
                    </ul>
                  </section>
                </div>
              </div>
            </div>
            </div>
            )}

          {activeTab === 'terms' && (
            <div className="prose max-w-none">
               <div className="container mx-auto p-4">
                <div className="shadow-lg border rounded-md p-6">
                  <header className="mb-4">
                    <h1 className="text-2xl font-bold">
                      Terms of Service of Deekode Accounting Firm
                    </h1>
                    <p className="text-sm text-gray-500">Effective Date: 14.01.2025</p>
                  </header>
                  <div>
                    <p className="text-base text-gray-700">
                      Welcome to Deekode Accounting Firm! By engaging our services, you
                      agree to the following Terms of Service. Please read these terms
                      carefully, as they outline the rights and responsibilities of both
                      parties.
                    </p>

                    <Separator.Root className="my-6 h-[1px] bg-gray-300" />

                    <section>
                      <h2 className="text-lg font-semibold">1. Agreement to Terms</h2>
                      <p className="text-gray-700 mt-2">
                        By using our services, you acknowledge that you have read,
                        understood, and agree to be bound by these Terms of Service. If
                        you do not agree, you must refrain from using our services.
                      </p>
                    </section>

                    <Separator.Root className="my-6 h-[1px] bg-gray-300" />

                    <section>
                      <h2 className="text-lg font-semibold">2. Services Provided</h2>
                      <p className="text-gray-700 mt-2">
                        Deekode Accounting Firm offers professional financial services,
                        including but not limited to:
                      </p>
                      <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
                        <li>Accounting and bookkeeping</li>
                        <li>Tax preparation and filing</li>
                        <li>Payroll management</li>
                        <li>Financial consulting and advisory services</li>
                      </ul>
                      <p className="text-gray-700 mt-2">
                        The specific scope of services will be defined in the engagement
                        agreement between you and Deekode Accounting Firm.
                      </p>
                    </section>

                    <Separator.Root className="my-6 h-[1px] bg-gray-300" />

                    <section>
                      <h2 className="text-lg font-semibold">3. Client Responsibilities</h2>
                      <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
                        <li>
                          Provide accurate, complete, and timely information and documents
                          as requested.
                        </li>
                        <li>Respond promptly to inquiries and communications.</li>
                        <li>
                          Notify us immediately of any changes in your financial or
                          business circumstances.
                        </li>
                      </ul>
                      <p className="text-gray-700 mt-2">
                        Deekode is not responsible for errors or delays caused by the
                        client’s failure to fulfill these responsibilities.
                      </p>
                    </section>

                    <Separator.Root className="my-6 h-[1px] bg-gray-300" />

                    <section>
                      <h2 className="text-lg font-semibold">4. Fees and Payment</h2>
                      <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
                        <li>Service fees will be outlined in the engagement agreement.</li>
                        <li>
                          Payments are due as specified in the invoice or agreement. Late
                          payments may incur additional charges.
                        </li>
                        <li>
                          Fees are subject to review and adjustment with prior notice to
                          the client.
                        </li>
                      </ul>
                    </section>

                    <Separator.Root className="my-6 h-[1px] bg-gray-300" />

                    <section>
                      <h2 className="text-lg font-semibold">5. Confidentiality</h2>
                      <p className="text-gray-700 mt-2">
                        Deekode Accounting Firm is committed to maintaining the
                        confidentiality of your information. We will not disclose your
                        personal or financial data to third parties except as required by
                        law or with your express consent.
                      </p>
                    </section>

                    <Separator.Root className="my-6 h-[1px] bg-gray-300" />

                    <section>
                      <h2 className="text-lg font-semibold">6. Limitation of Liability</h2>
                      <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
                        <li>
                          Deekode Accounting Firm will perform its services with due care
                          and professionalism; however, we are not liable for:
                          <ul className="list-disc pl-6 mt-2">
                            <li>
                              Losses resulting from decisions made based on our services
                              or recommendations.
                            </li>
                            <li>
                              Errors or omissions arising from inaccurate or incomplete
                              information provided by the client.
                            </li>
                          </ul>
                        </li>
                        <li>
                          Our liability is limited to the amount paid for the specific
                          service in question.
                        </li>
                      </ul>
                    </section>

                    <Separator.Root className="my-6 h-[1px] bg-gray-300" />

                    <section>
                      <h2 className="text-lg font-semibold">7. Termination</h2>
                      <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
                        <li>Either party may terminate the engagement with written notice.</li>
                        <li>
                          Termination does not absolve the client of payment obligations
                          for services rendered up to the termination date.
                        </li>
                        <li>
                          Upon termination, Deekode will provide all documents and data
                          belonging to the client.
                        </li>
                      </ul>
                    </section>

                    <Separator.Root className="my-6 h-[1px] bg-gray-300" />

                    <section>
                      <h2 className="text-lg font-semibold">8. Intellectual Property</h2>
                      <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
                        <li>
                          Reports, analyses, and other deliverables created by Deekode
                          Accounting Firm remain our intellectual property unless
                          otherwise agreed.
                        </li>
                        <li>
                          Clients are granted a non-exclusive, non-transferable license to
                          use these materials for their intended purposes.
                        </li>
                      </ul>
                    </section>

                    <Separator.Root className="my-6 h-[1px] bg-gray-300" />

                    <section>
                      <h2 className="text-lg font-semibold">9. Compliance with Laws</h2>
                      <p className="text-gray-700 mt-2">
                        Both parties agree to comply with all applicable laws,
                        regulations, and professional standards relevant to the services
                        provided.
                      </p>
                    </section>

                    <Separator.Root className="my-6 h-[1px] bg-gray-300" />

                    <section>
                      <h2 className="text-lg font-semibold">10. Dispute Resolution</h2>
                      <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
                        <li>
                          Any disputes arising from these Terms of Service will first be
                          resolved through good faith negotiation.
                        </li>
                        <li>
                          If unresolved, disputes may be referred to mediation or
                          arbitration in accordance with applicable laws.
                        </li>
                      </ul>
                    </section>

                    <Separator.Root className="my-6 h-[1px] bg-gray-300" />

                    <section>
                      <h2 className="text-lg font-semibold">11. Changes to Terms</h2>
                      <p className="text-gray-700 mt-2">
                        Deekode Accounting Firm reserves the right to update these Terms
                        of Service as needed. Clients will be notified of significant
                        changes, and continued use of our services constitutes acceptance
                        of the revised terms.
                      </p>
                    </section>

                    <Separator.Root className="my-6 h-[1px] bg-gray-300" />

                    <section>
                      <h2 className="text-lg font-semibold">12. Governing Law</h2>
                      <p className="text-gray-700 mt-2">
                        These Terms of Service are governed by and construed in accordance
                        with the laws of [Insert Jurisdiction].
                      </p>
                    </section>

                    <Separator.Root className="my-6 h-[1px] bg-gray-300" />

                    <section>
                      <h2 className="text-lg font-semibold">13. Contact Information</h2>
                      <p className="text-gray-700 mt-2">
                        For questions or concerns about these Terms of Service, please
                        contact us:
                      </p>
                      <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
                        <li>Email: [Insert Email Address]</li>
                        <li>Phone: [Insert Phone Number]</li>
                        <li>Address: [Insert Physical Address]</li>
                      </ul>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default LegalPage

