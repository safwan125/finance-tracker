import React, { useState } from 'react';

const TransactionList = ({ transactions, onDelete, onEdit }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('all');

    const filteredTransactions = transactions.filter(t => {
        const matchesSearch = t.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesType = filterType === 'all' || t.type === filterType;
        return matchesSearch && matchesType;
    });

    return (
        <div className="w-full max-w-4xl mx-auto">
            {/* Filters & Search */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
                <input
                    type="text"
                    placeholder="Search transactions..."
                    className="flex-1 p-3 rounded-xl bg-neu-bg shadow-[inset_6px_6px_10px_0_rgba(163,177,198,0.7),inset_-6px_-6px_10px_0_rgba(255,255,255,0.8)] border-none outline-none text-gray-700 placeholder-gray-400"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select
                    className="p-3 rounded-xl bg-neu-bg shadow-neu-flat border-none outline-none text-gray-700 w-full md:w-32 cursor-pointer focus:shadow-neu-pressed transition-all duration-200"
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                >
                    <option value="all">All</option>
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>
            </div>

            {/* List */}
            <div className="flex flex-col gap-4 max-h-[500px] overflow-y-auto pr-2 pb-4 scrollbar-hide">
                {filteredTransactions.map(t => (
                    <div key={t.id} className="flex justify-between items-center p-5 rounded-xl bg-neu-bg shadow-neu-flat hover:translate-y-[-2px] transition-transform duration-200">
                        <div className="flex flex-col">
                            <span className="font-bold text-gray-700 text-lg">{t.title}</span>
                            <span className="text-xs text-gray-500 font-medium">{t.date} • {t.category}</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className={`font-bold text-lg ${t.type === 'income' ? 'text-green-500' : 'text-red-500'}`}>
                                {t.type === 'income' ? '+' : '-'}${Number(t.amount).toFixed(2)}
                            </span>
                            <div className="flex gap-3">
                                <button
                                    onClick={() => onEdit(t)}
                                    className="w-9 h-9 rounded-full bg-neu-bg shadow-neu-flat flex items-center justify-center text-blue-500 hover:shadow-neu-pressed active:scale-95 transition-all text-sm"
                                >
                                    ✎
                                </button>
                                <button
                                    onClick={() => onDelete(t.id)}
                                    className="w-9 h-9 rounded-full bg-neu-bg shadow-neu-flat flex items-center justify-center text-red-500 hover:shadow-neu-pressed active:scale-95 transition-all text-lg leading-none pb-1"
                                >
                                    ×
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
                {filteredTransactions.length === 0 && (
                    <div className="text-center text-gray-400 font-medium py-10 italic">No transactions found.</div>
                )}
            </div>
        </div>
    );
};

export default TransactionList;
