import React, { useState, useEffect } from 'react';
import { getExpenses, addExpense, getTotalSpending, getCategorySummary } from '../services/api';
import SummaryCard from '../components/SummaryCard';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';
import CategoryChart from '../components/CategoryChart';
import { Activity } from 'lucide-react';

const Dashboard = ({ currentUser }) => {
    const [expenses, setExpenses] = useState([]);
    const [totalSpending, setTotalSpending] = useState(0);
    const [summary, setSummary] = useState([]);
    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const [expensesData, totalData, summaryData] = await Promise.all([
                getExpenses(currentUser.id),
                getTotalSpending(currentUser.id),
                getCategorySummary(currentUser.id)
            ]);
            
            setExpenses(expensesData);
            setTotalSpending(totalData);
            setSummary(summaryData);
            setError(null);
        } catch (err) {
            setError("Could not connect to the backend server. Make sure Spring Boot is running on port 8080.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleAddExpense = async (expenseData) => {
        try {
            const expenseWithUser = { ...expenseData, userId: currentUser.id };
            await addExpense(expenseWithUser);
            await fetchData(); // Refresh all data to sync state
        } catch (err) {
            setError("Failed to add expense.");
            console.error(err);
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
            <header className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-white">
                        Overview
                    </h1>
                    <p className="text-slate-400 mt-1">Here is a summary of your personal finances.</p>
                </div>
            </header>

            {error && (
                <div className="bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-xl">
                    {error}
                </div>
            )}

            {loading ? (
                <div className="flex justify-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-8">
                            <SummaryCard total={totalSpending} />
                            <ExpenseForm onAddExpense={handleAddExpense} />
                        </div>
                        <div className="lg:col-span-1 h-[450px]">
                            <CategoryChart summaryData={summary} />
                        </div>
                    </div>
                    
                    <div className="mt-8">
                        <ExpenseList expenses={expenses} />
                    </div>
                </>
            )}
        </div>
    );
};

export default Dashboard;
