'use client'

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaSort, FaUndo } from 'react-icons/fa';

type Client = {
    id: number;
    name: string;
    email: string;
    lastActive: string;
    totalRevenue: number;
  };

type SortField = keyof Client;

const PreviousClientsPage = () => {
    const [clients, setClients] = useState([
        { id: 1, name: 'David Wilson', email: 'david@example.com', lastActive: '2022-12-01', totalRevenue: 5000 },
        { id: 2, name: 'Emma Taylor', email: 'emma@example.com', lastActive: '2023-01-15', totalRevenue: 3500 },
        { id: 3, name: 'Frank Miller', email: 'frank@example.com', lastActive: '2023-02-28', totalRevenue: 4200 },
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [sortField, setSortField] = useState<SortField>('name');
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

    useEffect(() => {
        // In a real application, you would fetch the updated list of previous clients here
        // For now, we'll just simulate receiving a new client
        const shiftedClientString = localStorage.getItem('shiftedClient');
        if (shiftedClientString) {
          const shiftedClient = JSON.parse(shiftedClientString);
          setClients(prevClients => [
            ...prevClients,
            {
              ...shiftedClient,
              id: prevClients.length + 1,
              lastActive: new Date().toISOString().split('T')[0],
              totalRevenue: 0, // You might want to calculate this based on their history
            },
          ]);
        }
      }, []);

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

    const handleReactivate = (id: number) => {
        // In a real application, you would implement the logic to reactivate the client here
        console.log(`Reactivating client with id: ${id}`);
        const clientToReactivate = clients.find(client => client.id === id);
        if (clientToReactivate) {
            setClients(clients.filter(client => client.id !== id));
            // You would then update the existing clients list, possibly through a global state management solution or an API call
            console.log(`Client ${clientToReactivate.name} has been reactivated`);
        }
    };

    return (
        <div className="min-h-screen font-sans bg-gray-100">
            <section className="bg-gradient-to-r from-purple-600 to-purple-400 text-white py-20">
                <div className="container mx-auto px-4">
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Previous Clients
                    </motion.h1>
                    <motion.p
                        className="text-xl mb-8"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        View and manage your past client relationships
                    </motion.p>
                </div>
            </section>
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="mb-8 relative">
                        <input
                            type="text"
                            placeholder="Search clients..."
                            className="w-full p-4 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
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
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => handleSort('lastActive')}>
                                        Last Active <FaSort className="inline ml-1" />
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => handleSort('totalRevenue')}>
                                        Total Revenue <FaSort className="inline ml-1" />
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
                                        <td className="px-6 py-4 whitespace-nowrap">{client.lastActive}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">${client.totalRevenue.toLocaleString()}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <button
                                                onClick={() => handleReactivate(client.id)}
                                                className="text-purple-600 hover:text-purple-900 flex items-center"
                                            >
                                                <FaUndo className="mr-2" />
                                                Reactivate
                                            </button>
                                        </td>
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

export default PreviousClientsPage;

