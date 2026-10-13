import React from 'react';
import { Wallet } from 'lucide-react';

const SummaryCard = ({ total }) => {
    return (
        <div className="glass-panel p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-10">
                <Wallet size={120} />
            </div>
            <div className="relative z-10">
                <p className="text-sm text-slate-400 font-medium tracking-wider uppercase mb-1">
                    Total Balance Spent
                </p>
                <h2 className="text-4xl font-bold text-white tracking-tight">
                    ${total?.toFixed(2) || "0.00"}
                </h2>
                <div className="mt-4 inline-flex items-center space-x-2 text-sm text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Live Tracking</span>
                </div>
            </div>
        </div>
    );
};

export default SummaryCard;
