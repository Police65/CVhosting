
import React from 'react';

interface CardProps {
    title: string;
    icon: React.ReactNode;
    children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, icon, children }) => {
    return (
        <section className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-5 border-b border-gray-700">
                <h3 className="text-xl font-bold text-white flex items-center">
                    <span className="mr-3 text-indigo-400">{icon}</span>
                    {title}
                </h3>
            </div>
            <div className="p-5">
                {children}
            </div>
        </section>
    );
};

export default Card;
