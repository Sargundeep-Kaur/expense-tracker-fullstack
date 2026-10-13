import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { PieChart } from 'lucide-react';

ChartJS.register(ArcElement, Tooltip, Legend);

const CategoryChart = ({ summaryData }) => {
    
    if (!summaryData || summaryData.length === 0) {
        return (
            <div className="glass-panel p-6 h-full flex flex-col items-center justify-center min-h-[300px]">
                <PieChart size={48} className="text-slate-600 mb-4" />
                <p className="text-slate-400">Not enough data to graph.</p>
            </div>
        )
    }

    const data = {
        labels: summaryData.map(item => item.category),
        datasets: [
            {
                data: summaryData.map(item => item.totalAmount),
                backgroundColor: [
                    '#3B82F6', // Blue 500
                    '#10B981', // Emerald 500
                    '#F59E0B', // Amber 500
                    '#EF4444', // Red 500
                    '#8B5CF6', // Violet 500
                    '#EC4899', // Pink 500
                ],
                borderColor: '#1E293B',
                borderWidth: 2,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: '#cbd5e1',
                    padding: 20,
                    font: {
                        family: "'Inter', sans-serif"
                    }
                }
            }
        }
    };

    return (
        <div className="glass-panel p-6 h-full min-h-[300px] flex flex-col">
            <h3 className="text-xl font-semibold mb-6 text-white border-b border-slate-700/50 pb-4 flex items-center">
                <PieChart className="mr-2 text-primary" size={24} />
                Analytics
            </h3>
            <div className="flex-grow flex items-center justify-center relative">
               <div className="w-full h-[250px]">
                   <Pie data={data} options={options} />
               </div>
            </div>
        </div>
    );
};

export default CategoryChart;
