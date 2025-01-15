'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaSort, FaUserPlus, FaUserMinus } from 'react-icons/fa';
import AddClientModal from './AddClientModal';

type Client = {
    id: number;
    name: string;
    email: string;
    joinDate: string;
    lastInvoice: string;
  };
  
  type SortField = keyof Client;
  type NewClient = Omit<Client, 'id'>;
const ExistingClientsPage = () => {
    const [clients, setClients] = useState<Client[]>([
        { id: 1, name: 'Alice Brown', email: 'alice@example.com', joinDate: '2023-01-15', lastInvoice: '2023-06-01' },
        { id: 2, name: 'Charlie Davis', email: 'charlie@example.com', joinDate: '2023-02-20', lastInvoice: '2023-05-15' },
        { id: 3, name: 'Eva Green', email: 'eva@example.com', joinDate: '2023-03-10', lastInvoice: '2023-06-10' },
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [sortField, setSortField] = useState<SortField>('name');
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const filteredClients = clients.filter(client =>
        client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.email.toLowerCase().includes(searchTerm.toLowerCase())
    ).sort((a, b) => {
        if (a[sortField] < b[sortField]) return sortDirection === 'asc' ? -1 : 1;
        if (a[sortField] > b[sortField]) return sortDirection === 'asc' ? 1 : -1;
        return 0;
    });

    const handleSort = (field: SortField) => {
        if (field === sortField) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortField(field);
            setSortDirection('asc');
        }
    };

    const handleAddClient = (newClient: NewClient) => {
        setClients([...clients, { ...newClient, id: clients.length + 1 }]);
        setIsAddModalOpen(false);
    };

    const handleShiftToPrevious = (id: number) => {
        const clientToShift = clients.find(client => client.id === id);
        if (clientToShift) {
            // In a real application, you would make an API call here
            console.log(`Shifting client ${clientToShift.name} to previous clients`);
            setClients(clients.filter(client => client.id !== id));
            // You would then update the previous clients list, possibly through a global state management solution or an API call
        }
    };

    return (
        <div className="min-h-screen font-sans bg-gray-100">
            <section className="bg-gradient-to-r from-green-600 to-green-400 text-white py-20">
                <div className="container mx-auto px-4">
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Existing Clients
                    </motion.h1>
                    <motion.p
                        className="text-xl mb-8"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Manage and view your current client base
                    </motion.p>
                </div>
            </section>
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="mb-8 flex justify-between items-center">
                        <div className="relative flex-grow mr-4">
                            <input
                                type="text"
                                placeholder="Search clients..."
                                className="w-full p-4 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>
                        <button
                            onClick={() => setIsAddModalOpen(true)}
                            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300 flex items-center"
                        >
                            <FaUserPlus className="mr-2" />
                            Add Client
                        </button>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => handleSort('name')}>
                                        Name <FaSort className="inline ml-1" />
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => handleSort('email')}>
                                        Email <FaSort className="inline ml-1" />
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => handleSort('joinDate')}>
                                        Join Date <FaSort className="inline ml-1" />
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => handleSort('lastInvoice')}>
                                        Last Invoice <FaSort className="inline ml-1" />
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {filteredClients.map((client) => (
                                    <tr key={client.id}>
                                        <td className="px-6 py-4 whitespace-nowrap">{client.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{client.email}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{client.joinDate}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{client.lastInvoice}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <button
                                                onClick={() => handleShiftToPrevious(client.id)}
                                                className="text-red-600 hover:text-red-900 flex items-center"
                                            >
                                                <FaUserMinus className="mr-2" />
                                                Shift to Previous
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            <AddClientModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} onAdd={handleAddClient} />
        </div>
    );
};

export default ExistingClientsPage;

