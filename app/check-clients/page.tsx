'use client'

import { useState } from 'react';
import Link from 'next/link';

const CheckClientsPage = () => {
    const [clients, setClients] = useState([
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
    ]);

    return (
        <div className="min-h-screen font-sans bg-gray-100">
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Check Clients</h2>
                    <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
                        {clients.map((client) => (
                            <div key={client.id} className="mb-4 p-4 border rounded-lg">
                                <p className="text-lg font-semibold">{client.name}</p>
                                <p className="text-gray-600">{client.email}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <footer className="text-center py-8 bg-blue-600 text-white">
                <Link href="/admin">Back to Admin Dashboard</Link>
            </footer>
        </div>
    );
};

export default CheckClientsPage;
