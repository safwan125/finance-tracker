import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const Analytics = ({ transactions }) => {
    const income = transactions
        .filter(t => t.type === 'income')
        .reduce((acc, t) => acc + Number(t.amount), 0);

    const expense = transactions
        .filter(t => t.type === 'expense')
        .reduce((acc, t) => acc + Number(t.amount), 0);

    const data = {
        labels: ['Income', 'Expense'],
        datasets: [
            {
                label: 'Amount ($)',
                data: [income, expense],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: '#4d4d4d'
                }
            },
            title: {
                display: true,
                text: 'Income vs Expense',
                color: '#4d4d4d'
            },
        },
        scales: {
            y: {
                ticks: { color: '#4d4d4d' },
                grid: { color: '#e0e5ec' }
            },
            x: {
                ticks: { color: '#4d4d4d' },
                grid: { display: false }
            }
        }
    };

    return (
        <div className="p-6 rounded-2xl shadow-neu-flat bg-neu-bg dark:bg-dark-neu-bg dark:shadow-dark-neu-flat">
            <h2 className="text-xl font-bold text-neu-text dark:text-dark-neu-text mb-4">Financial Analytics</h2>
            <div className="h-[400px] flex items-center justify-center">
                {transactions.length > 0 ? (
                    <Bar options={options} data={data} />
                ) : (
                    <p className="text-gray-500">No data available for analytics.</p>
                )}
            </div>
        </div>
    );
};

export default Analytics;
