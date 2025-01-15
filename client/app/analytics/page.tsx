'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const AnalyticsPage = () => {
    const [analyticsData, setAnalyticsData] = useState([
        { metric: 'Total Visitors', value: 1200 },
        { metric: 'New Signups', value: 300 },
        { metric: 'Page Views', value: 4500 }
    ]);

    return (
        <div className="min-h-screen font-sans bg-gray-100">
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Analytics Dashboard</h2>
                    <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
                        {analyticsData.map((data, index) => (
                            <div key={index} className="mb-4 p-4 border rounded-lg">
                                <p className="text-lg font-semibold">{data.metric}</p>
                                <p className="text-gray-600">{data.value}</p>
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

export default AnalyticsPage;
