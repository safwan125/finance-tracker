import React, { useState, useEffect } from 'react';
import { auth, db } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { collection, addDoc, deleteDoc, updateDoc, doc, onSnapshot, query, where, orderBy } from 'firebase/firestore';
import Navbar from './components/Navbar';
import SummaryCards from './components/SummaryCards';
import TransactionList from './components/TransactionList';
import TransactionForm from './components/TransactionForm';
import Auth from './components/Auth';

function App() {
  const [user, setUser] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingTransaction, setEditingTransaction] = useState(null);
  const [loading, setLoading] = useState(true);

  // Auth Listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  // Firestore Listener
  useEffect(() => {
    if (user) {
      const q = query(
        collection(db, 'transactions'),
        where('uid', '==', user.uid),
        orderBy('date', 'desc')
      );
      const unsubscribe = onSnapshot(q,
        (snapshot) => {
          setTransactions(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        },
        (error) => {
          console.error("Firestore error:", error);
          if (error.code === 'permission-denied') {
            alert("Error: Permission denied. Please check your Firestore Security Rules.");
          } else {
            alert(`Firestore Error: ${error.message}`);
          }
        }
      );
      return unsubscribe;
    } else {
      setTransactions([]);
    }
  }, [user]);

  const handleSaveTransaction = async (transaction) => {
    try {
      const { id, ...data } = transaction;

      if (id) {
        // Update
        const transactionRef = doc(db, 'transactions', id);
        await updateDoc(transactionRef, { ...data, uid: user.uid });
      } else {
        // Create
        await addDoc(collection(db, 'transactions'), { ...data, uid: user.uid });
      }
    } catch (error) {
      console.error("Error saving transaction: ", error);
      alert(`Failed to save: ${error.message}`);
    }
  };

  const handleDeleteTransaction = async (id) => {
    if (window.confirm('Delete this transaction?')) {
      try {
        await deleteDoc(doc(db, 'transactions', id));
      } catch (error) {
        console.error("Error deleting transaction: ", error);
      }
    }
  };

  const handleEditTransaction = (transaction) => {
    setEditingTransaction(transaction);
    setIsFormOpen(true);
  };

  const handleLogout = () => signOut(auth);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-neu-bg text-gray-500 font-bold animate-pulse">
        Loading FinTracker...
      </div>
    );
  }

  if (!user) return <Auth />;

  return (
    <div className="min-h-screen bg-neu-bg text-neu-text transition-colors duration-500">
      <div className="container mx-auto p-4 md:p-8 max-w-5xl">
        <Navbar user={user} onLogout={handleLogout} />

        <SummaryCards transactions={transactions} />

        {/* Floating Add Button */}
        <button
          onClick={() => { setEditingTransaction(null); setIsFormOpen(true); }}
          className="fixed bottom-10 right-10 w-16 h-16 rounded-full bg-neu-bg shadow-neu-flat flex items-center justify-center text-4xl text-blue-500 hover:text-blue-600 hover:shadow-neu-pressed transition-all duration-300 z-40"
          title="Add Transaction"
        >
          +
        </button>

        <TransactionList
          transactions={transactions}
          onDelete={handleDeleteTransaction}
          onEdit={handleEditTransaction}
        />

        <TransactionForm
          isOpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          onSave={handleSaveTransaction}
          transactionToEdit={editingTransaction}
        />
      </div>
    </div>
  );
}

export default App;
