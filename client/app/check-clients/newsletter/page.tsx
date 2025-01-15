'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';

const NewsletterClientsPage = () => {
    const [clients, setClients] = useState([
        { id: 1, email: 'john@example.com', signupDate: '2023-05-01' },
        { id: 2, email: 'jane@example.com', signupDate: '2023-05-15' },
        { id: 3, email: 'bob@example.com', signupDate: '2023-06-01' },
    ]);

    const [searchTerm, setSearchTerm] = useState('');

    const filteredClients = clients.filter(client =>
        client.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
                        Newsletter Clients
                    </motion.h1>
                    <motion.p
                        className="text-xl mb-8"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Manage and view clients subscribed to your newsletter
                    </motion.p>
                </div>
            </section>
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="mb-8 relative">
                        <input
                            type="text"
                            placeholder="Search clients..."
                            className="w-full p-4 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S.No.</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Signup Date</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {filteredClients.map((client) => (
                                    <tr key={client.id}>
                                        <td className="px-6 py-4 whitespace-nowrap">{client.id}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{client.email}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{client.signupDate}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NewsletterClientsPage;