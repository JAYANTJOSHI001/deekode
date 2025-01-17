'use client'

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaSort, FaUserPlus, FaUserMinus } from 'react-icons/fa';
import AddClientModal from './AddClientModal';
import axios from 'axios';

type Client = {
    _id: number;
    name: string;
    email: string;
    createdAt: string;
    phone: number;
  };
  
  type SortField = keyof Client;
  type NewClient = Omit<Client, '_id'>;
const ExistingClientsPage = () => {
    const [clients, setClients] = useState<Client[]>([
        { _id: 1, name: 'Alice Brown', email: 'alice@example.com', createdAt: '2023-01-15', phone: 356865665 },
        { _id: 2, name: 'Charlie Davis', email: 'charlie@example.com', createdAt: '2023-02-20', phone: 668898555 },
        { _id: 3, name: 'Eva Green', email: 'eva@example.com', createdAt: '2023-03-10', phone: 515489615 },
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [sortField, setSortField] = useState<SortField>('name');
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [error, setError] = useState('');

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

    const handleAddClient = async (newClient: NewClient) => {
        try {
          // Update frontend state
          setClients([...clients, { ...newClient, _id: clients.length + 1 }]);
      
          // Send a POST request to the backend API to save the client
          const response = await axios.post('http://localhost:5000/api/clients/existing', {
            email: newClient.email,
            name: newClient.name,
            phone: newClient.phone,
          });
      
          console.log(response.data.message);  // Log success message
          setIsAddModalOpen(false);  // Close the modal after adding
        } catch (error) {
          console.error('Error adding client:', error);
        }
      };
    
      const fetchExistingClients = async () => {
        try {
          // Make the GET request to fetch existing clients
          const response = await axios.get('http://localhost:5000/api/clients/existing');
      
          // Update the clients state with the response data
          setClients(response.data);  // Assuming `setClients` updates your state with the client list
      
          console.log('Existing clients fetched:', response.data);
        } catch (error) {
          console.error('Error fetching existing clients:', error);
        }
      };

      useEffect(() => {
        fetchExistingClients();  // Fetch the existing clients when the component mounts
      }, []);

      const handleShiftToPrevious = async (id: number) => {
        const clientToShift = clients.find(client => client._id === id);
        console.log(clientToShift?._id);
      
        if (clientToShift) {
          // In a real application, you would make an API call here to update the client type
          try {
            // Make a PUT request to update the client type to 'previous'
            await axios.put(`http://localhost:5000/api/clients/shift/${id}`, {
              type: 'previous',  // Changing the type to 'previous'
            });
      
            // If successful, update the client list locally
            console.log(`Shifting client ${clientToShift.name} to previous clients`);
            
            // Update clients by setting the type to 'previous' for the client
            setClients(clients.map(client => 
              client._id === id ? { ...client, type: 'previous' } : client
            ));
          } catch (error) {
            console.error('Error shifting client:', error);
          }
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
                    <div className="bg-white rounded-lg shadow-lg overflow-h_idden">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-w_ider cursor-pointer" onClick={() => handleSort('name')}>
                                        Name <FaSort className="inline ml-1" />
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-w_ider cursor-pointer" onClick={() => handleSort('email')}>
                                        Email <FaSort className="inline ml-1" />
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-w_ider cursor-pointer" onClick={() => handleSort('createdAt')}>
                                        Join Date <FaSort className="inline ml-1" />
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-w_ider cursor-pointer" onClick={() => handleSort('phone')}>
                                        Last Invoice <FaSort className="inline ml-1" />
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-w_ider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white div_ide-y div_ide-gray-200">
                                {filteredClients.map((client) => (
                                    <tr key={client._id}>
                                        <td className="px-6 py-4 whitespace-nowrap">{client.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{client.email}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{client.createdAt}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{client.phone}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <button
                                                onClick={() => handleShiftToPrevious(client._id)}
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

