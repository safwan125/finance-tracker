import React, { useState, useEffect } from 'react';

const TransactionForm = ({ isOpen, onClose, onSave, transactionToEdit }) => {
    const [formData, setFormData] = useState({
        title: '',
        amount: '',
        type: 'expense',
        category: 'General',
        date: new Date().toISOString().split('T')[0]
    });

    useEffect(() => {
        if (transactionToEdit) {
            setFormData(transactionToEdit);
        } else {
            setFormData({
                title: '',
                amount: '',
                type: 'expense',
                category: 'General',
                date: new Date().toISOString().split('T')[0]
            });
        }
    }, [transactionToEdit, isOpen]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ ...formData, id: transactionToEdit?.id });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-20 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity">
            <div className="bg-neu-bg p-8 rounded-3xl shadow-neu-flat w-full max-w-md m-4 border border-white border-opacity-40">
                <h2 className="text-xl font-bold text-gray-700 mb-6 tracking-wide">
                    {transactionToEdit ? 'Edit Transaction' : 'New Transaction'}
                </h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <input
                        type="text"
                        placeholder="Title"
                        required
                        className="p-4 rounded-xl bg-neu-bg shadow-[inset_6px_6px_10px_0_rgba(163,177,198,0.7),inset_-6px_-6px_10px_0_rgba(255,255,255,0.8)] border-none outline-none text-gray-700 placeholder-gray-400"
                        value={formData.title}
                        onChange={e => setFormData({ ...formData, title: e.target.value })}
                    />

                    <div className="flex gap-4">
                        <input
                            type="number"
                            placeholder="Amount"
                            required
                            className="flex-1 p-4 rounded-xl bg-neu-bg shadow-[inset_6px_6px_10px_0_rgba(163,177,198,0.7),inset_-6px_-6px_10px_0_rgba(255,255,255,0.8)] border-none outline-none text-gray-700 placeholder-gray-400"
                            value={formData.amount}
                            onChange={e => setFormData({ ...formData, amount: e.target.value })}
                        />
                        <select
                            className="flex-1 p-4 rounded-xl bg-neu-bg shadow-neu-flat border-none outline-none text-gray-700 cursor-pointer focus:shadow-neu-pressed transition-all"
                            value={formData.type}
                            onChange={e => setFormData({ ...formData, type: e.target.value })}
                        >
                            <option value="income">Income</option>
                            <option value="expense">Expense</option>
                        </select>
                    </div>

                    <div className="flex gap-4">
                        <input
                            type="text"
                            placeholder="Category"
                            required
                            className="flex-1 p-4 rounded-xl bg-neu-bg shadow-[inset_6px_6px_10px_0_rgba(163,177,198,0.7),inset_-6px_-6px_10px_0_rgba(255,255,255,0.8)] border-none outline-none text-gray-700 placeholder-gray-400"
                            value={formData.category}
                            onChange={e => setFormData({ ...formData, category: e.target.value })}
                        />
                        <input
                            type="date"
                            required
                            className="flex-1 p-4 rounded-xl bg-neu-bg shadow-[inset_6px_6px_10px_0_rgba(163,177,198,0.7),inset_-6px_-6px_10px_0_rgba(255,255,255,0.8)] border-none outline-none text-gray-500 text-sm"
                            value={formData.date}
                            onChange={e => setFormData({ ...formData, date: e.target.value })}
                        />
                    </div>

                    <div className="flex justify-end gap-3 mt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-6 py-2 rounded-xl bg-neu-bg shadow-neu-flat text-gray-500 hover:text-red-500 hover:shadow-neu-pressed font-bold transition-all duration-300"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-8 py-2 rounded-xl bg-neu-bg shadow-neu-flat text-blue-500 hover:shadow-neu-pressed hover:text-blue-600 font-bold transition-all duration-300 transform active:scale-95"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TransactionForm;
