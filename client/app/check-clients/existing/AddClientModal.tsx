'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { Phone } from 'lucide-react';
import axios from 'axios';

interface AddClientModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAdd: (client: { name: string; email: string; createdAt: string; phone: number }) => void;
}

interface NewClient {
    name: string;
    email: string;
    createdAt: string;
    phone: number;
}

const AddClientModal: React.FC<AddClientModalProps> = ({ isOpen, onClose, onAdd }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [createdAt, setcreatedAt] = useState('');

    // Form submit handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare new client object
    const newClient: NewClient = { name, email, createdAt, phone: Number(phone) };

    // Call the handleAddClient function to send data to the backend
    handleAddClient(newClient);

    // Reset form fields
    setName('');
    setEmail('');
    setcreatedAt('');
    setPhone('');
  };

  // Add client to the backend
  const handleAddClient = async (newClient: NewClient) => {
    try {
      // Send a POST request to the backend API to save the client
      const response = await axios.post('https://deekode-1.onrender.com/api/clients/existing', {
        email: newClient.email,
        name: newClient.name,
        phone: newClient.phone,
      });

      console.log(response.data.message);  // Log success message
    } catch (error) {
      console.error('Error adding client:', error);
    }
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
                                <label htmlFor="createdAt" className="block text-sm font-medium text-gray-700">Join Date</label>
                                <input
                                    type="date"
                                    id="createdAt"
                                    value={createdAt}
                                    onChange={(e) => setcreatedAt(e.target.value)}
                                    required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                                <input
                                    type="phone"
                                    id="phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
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

