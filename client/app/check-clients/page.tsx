'use client'

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const CheckClientsPage = () => {
    const [clients, setClients] = useState([
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
    ]);

    return (
        <div className="min-h-screen font-sans bg-gray-100">
            <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20">
                <div className="container mx-auto px-4">
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Check Clients
                    </motion.h1>
                    <motion.p
                        className="text-xl mb-8"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Check clients who have signed up
                    </motion.p>
                </div>
            </section>
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Link href="/check-clients/newsletter" className="group bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 border-t-4 border-blue-500">
                            <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-500">Newsletter Clients</h3>
                            <p className="text-gray-600">Clients who have signed up for the newsletter</p>
                            <div className="mt-4 flex items-center text-blue-500 font-semibold">
                                <span>Explore</span>
                                <FaArrowRight className="ml-2" />
                            </div>
                        </Link>   
                        <Link href="/check-clients/existing" className="group bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 border-t-4 border-green-500">
                            <h3 className="text-2xl font-bold mb-4 group-hover:text-green-500">Existing Clients</h3>
                            <p className="text-gray-600">Clients who are currently using your services</p>
                            <div className="mt-4 flex items-center text-blue-500 font-semibold">
                                <span>Explore</span>
                                <FaArrowRight className="ml-2" />
                            </div>
                        </Link>  
                        <Link href="/check-clients/previous" className="group bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 border-t-4 border-purple-500">
                            <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-500">Previous Clients</h3>
                            <p className="text-gray-600">Clients who have previously used your services</p>
                            <div className="mt-4 flex items-center text-blue-500 font-semibold">
                                <span>Explore</span>
                                <FaArrowRight className="ml-2" />
                            </div>
                        </Link>  
                        <Link href="/check-clients/messages" className="group bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 border-t-4 border-pink-500">
                            <h3 className="text-2xl font-bold mb-4 group-hover:text-pink-500">Client Messages</h3>
                            <p className="text-gray-600">View and manage messages from clients</p>    
                            <div className="mt-4 flex items-center text-blue-500 font-semibold">
                                <span>Explore</span>
                                <FaArrowRight className="ml-2" />
                            </div>
                        </Link>
                    </div>    
                </div>
            </section>
        </div>
    );
};

export default CheckClientsPage;