import React from 'react';
import { Activity, LogOut } from 'lucide-react';

const Header = ({ currentUser, onLogout }) => {
    return (
        <header className="glass-panel rounded-none border-t-0 border-l-0 border-r-0 border-b border-white/10 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <Activity className="text-primary" size={28} />
                    <span className="text-xl font-bold tracking-tight text-white">Expense Tracker</span>
                </div>
                
                {currentUser && (
                    <div className="flex items-center space-x-6">
                        <span className="text-slate-300 text-sm hidden sm:block">
                            Welcome back, <span className="text-white font-medium">{currentUser.name}</span>
                        </span>
                        <button 
                            onClick={onLogout}
                            className="flex items-center text-sm text-slate-400 hover:text-danger transition-colors bg-card hover:bg-slate-800 px-3 py-2 rounded-lg border border-slate-700/50"
                        >
                            <LogOut size={16} className="mr-2" />
                            Sign Out
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
