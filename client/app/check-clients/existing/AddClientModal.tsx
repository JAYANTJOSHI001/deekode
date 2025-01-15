'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

interface AddClientModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAdd: (client: { name: string; email: string; joinDate: string; lastInvoice: string }) => void;
}

const AddClientModal: React.FC<AddClientModalProps> = ({ isOpen, onClose, onAdd }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [joinDate, setJoinDate] = useState('');
    const [lastInvoice, setLastInvoice] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onAdd({ name, email, joinDate, lastInvoice });
        setName('');
        setEmail('');
        setJoinDate('');
        setLastInvoice('');
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="bg-white rounded-lg p-8 w-full max-w-md"
                    >
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold">Add New Client</h2>
                            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                                <FaTimes />
                            </button>
                        </div>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200"
                                />
                            </div>
                            <div>
                                <label htmlFor="joinDate" className="block text-sm font-medium text-gray-700">Join Date</label>
                                <input
                                    type="date"
                                    id="joinDate"
                                    value={joinDate}
                                    onChange={(e) => setJoinDate(e.target.value)}
                                    required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200"
                                />
                            </div>
                            <div>
                                <label htmlFor="lastInvoice" className="block text-sm font-medium text-gray-700">Last Invoice Date</label>
                                <input
                                    type="date"
                                    id="lastInvoice"
                                    value={lastInvoice}
                                    onChange={(e) => setLastInvoice(e.target.value)}
                                    required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                            >
                                Add Client
                            </button>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default AddClientModal;

