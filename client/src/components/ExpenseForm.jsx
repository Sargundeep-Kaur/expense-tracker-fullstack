import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';

const ExpenseForm = ({ onAddExpense }) => {
    const [formData, setFormData] = useState({
        amount: '',
        category: 'Food',
        date: new Date().toISOString().split('T')[0],
        note: ''
    });

    const categories = ['Food', 'Transport', 'Utilities', 'Entertainment', 'Shopping', 'Other'];

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await onAddExpense(formData);
            // Reset form partly
            setFormData(prev => ({
                ...prev,
                amount: '',
                note: ''
            }));
        } catch (error) {
            console.error("Failed to add expense", error);
        }
    };

    return (
        <div className="glass-panel p-6">
            <h3 className="text-xl font-semibold mb-6 flex items-center text-white">
                <PlusCircle className="mr-2 text-primary" size={24} />
                Add New Expense
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <label className="text-sm text-slate-400 pl-1">Amount ($)</label>
                        <input
                            type="number"
                            step="0.01"
                            required
                            className="input-field"
                            placeholder="0.00"
                            value={formData.amount}
                            onChange={(e) => setFormData({...formData, amount: e.target.value})}
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-sm text-slate-400 pl-1">Category</label>
                        <select
                            className="input-field"
                            value={formData.category}
                            onChange={(e) => setFormData({...formData, category: e.target.value})}
                        >
                            {categories.map(cat => (
                                <option key={cat} value={cat} className="bg-card text-white">
                                    {cat}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="space-y-1">
                    <label className="text-sm text-slate-400 pl-1">Date</label>
                    <input
                        type="date"
                        required
                        className="input-field"
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                </div>

                <div className="space-y-1">
                    <label className="text-sm text-slate-400 pl-1">Note (Optional)</label>
                    <input
                        type="text"
                        className="input-field"
                        placeholder="What was this for?"
                        value={formData.note}
                        onChange={(e) => setFormData({...formData, note: e.target.value})}
                    />
                </div>

                <button type="submit" className="btn-primary mt-2">
                    Save Expense
                </button>
            </form>
        </div>
    );
};

export default ExpenseForm;
