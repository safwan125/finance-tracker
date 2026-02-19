import React from 'react';

const Card = ({ title, amount, color }) => (
    <div className="flex-1 bg-neu-bg rounded-2xl p-6 shadow-neu-flat dark:bg-dark-neu-bg dark:shadow-dark-neu-flat transition-colors duration-300">
        <h3 className="text-gray-500 font-bold mb-2 uppercase tracking-wider text-xs dark:text-gray-400">{title}</h3>
        <p className={`text-3xl font-extrabold ${color}`}>{amount}</p>
    </div>
);

const SummaryCards = ({ transactions = [] }) => {
    const income = transactions
        .filter(t => t.type === 'income')
        .reduce((acc, t) => acc + Number(t.amount), 0);

    const expense = transactions
        .filter(t => t.type === 'expense')
        .reduce((acc, t) => acc + Number(t.amount), 0);

    const balance = income - expense;

    return (
        <div className="flex flex-col md:flex-row gap-6 mb-10 w-full max-w-4xl mx-auto">
            <Card title="Total Balance" amount={`$${balance.toFixed(2)}`} color="text-gray-700 dark:text-white" />
            <Card title="Income" amount={`+$${income.toFixed(2)}`} color="text-green-500 dark:text-green-400" />
            <Card title="Expense" amount={`-$${expense.toFixed(2)}`} color="text-red-500 dark:text-red-400" />
        </div>
    );
};

export default SummaryCards;
