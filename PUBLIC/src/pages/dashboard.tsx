"use client"; // Add this if you are using Next.js App Router

import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";

const DashboardPage = () => {
    const [user, setUser] = useState(null);

    // This effect runs when the component mounts
    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (!token) {

            window.location.href = '/';
        } else {
            // In a real app, you would verify the token with the backend
            // For now, we'll just assume it's valid if it exists
            // and maybe decode it to get user info (if needed).
            // For this prototype, we'll just set a placeholder user.
            setUser({ username: 'Official' });
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        window.location.href = '/';
    };

    // If the user state is not yet set, show a loading message
    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-slate-100 p-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-slate-800">
                        Welcome to the DBT Sahayak Dashboard
                    </h1>
                    <Button onClick={handleLogout} variant="destructive">
                        Logout
                    </Button>
                </div>
                
                {/* All your dashboard widgets and charts will go here */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <p>Dashboard content coming soon...</p>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;