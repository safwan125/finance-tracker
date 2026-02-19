import React, { useState } from 'react';
import SummaryCards from './SummaryCards';
import TransactionList from './TransactionList';
import TransactionForm from './TransactionForm';

const Dashboard = ({ transactions, onDelete, onSave, onEdit, loading }) => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingTransaction, setEditingTransaction] = useState(null);

    const handleEdit = (transaction) => {
        setEditingTransaction(transaction);
        setIsFormOpen(true);
    };

    const handleCloseForm = () => {
        setIsFormOpen(false);
        setEditingTransaction(null);
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[50vh] text-gray-500 font-bold animate-pulse">
                Loading Dashboard...
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <SummaryCards transactions={transactions} />

            <button
                onClick={() => { setEditingTransaction(null); setIsFormOpen(true); }}
                className="fixed bottom-10 right-10 w-16 h-16 rounded-full bg-neu-bg shadow-neu-flat flex items-center justify-center text-4xl text-blue-500 hover:text-blue-600 hover:shadow-neu-pressed transition-all duration-300 z-40 dark:bg-dark-neu-bg dark:shadow-dark-neu-flat dark:hover:shadow-dark-neu-pressed dark:text-blue-400"
                title="Add Transaction"
            >
                +
            </button>

            <TransactionList transactions={transactions} onDelete={onDelete} onEdit={handleEdit} />

            <TransactionForm
                isOpen={isFormOpen}
                onClose={handleCloseForm}
                onSave={onSave}
                transactionToEdit={editingTransaction}
            />
        </div>
    );
};

export default Dashboard;
