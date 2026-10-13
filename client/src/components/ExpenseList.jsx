import React from 'react';
import { Calendar, Tag } from 'lucide-react';

const ExpenseList = ({ expenses }) => {
    if (!expenses || expenses.length === 0) {
        return (
            <div className="glass-panel p-8 text-center text-slate-400">
                <p>No expenses found. Start tracking!</p>
            </div>
        );
    }

    return (
        <div className="glass-panel p-6">
            <h3 className="text-xl font-semibold mb-6 text-white border-b border-slate-700/50 pb-4">
                Recent Transactions
            </h3>
            
            <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                {expenses.map((expense) => (
                    <div 
                        key={expense.id} 
                        className="bg-slate-800/40 rounded-xl p-4 border border-slate-700/50 flex justify-between items-center hover:bg-slate-800/60 transition-all cursor-default"
                    >
                        <div className="flex flex-col">
                            <span className="font-medium text-white mb-1 flex items-center">
                                <Tag size={14} className="mr-2 text-primary" />
                                {expense.category}
                            </span>
                            <span className="text-sm text-slate-400 flex items-center">
                                <Calendar size={14} className="mr-1" />
                                {new Date(expense.date).toLocaleDateString()} 
                                {expense.note && <span className="ml-2 text-slate-500">- {expense.note}</span>}
                            </span>
                        </div>
                        <div className="font-semibold text-lg text-danger">
                            -${expense.amount.toFixed(2)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExpenseList;
