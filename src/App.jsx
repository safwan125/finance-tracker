import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { auth, db } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { collection, addDoc, deleteDoc, updateDoc, doc, onSnapshot, query, where, orderBy } from 'firebase/firestore';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Analytics from './components/Analytics';
import Auth from './components/Auth';

function App() {
  const [user, setUser] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

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
        const transactionRef = doc(db, 'transactions', id);
        await updateDoc(transactionRef, { ...data, uid: user.uid });
      } else {
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

  const handleLogout = () => signOut(auth);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-neu-bg dark:bg-dark-neu-bg text-gray-500 font-bold animate-pulse">
        Loading MyFin...
      </div>
    );
  }

  if (!user) return <Auth />;

  return (
    <Router>
      <div className="min-h-screen bg-neu-bg text-neu-text transition-colors duration-500 dark:bg-dark-neu-bg dark:text-dark-neu-text">
        <div className="container mx-auto p-4 md:p-8 max-w-6xl">
          <Navbar
            user={user}
            onLogout={handleLogout}
            isDarkMode={isDarkMode}
            toggleTheme={toggleTheme}
          />

          <Routes>
            <Route
              path="/"
              element={
                <Dashboard
                  transactions={transactions}
                  onDelete={handleDeleteTransaction}
                  onSave={handleSaveTransaction}
                  loading={loading}
                />
              }
            />
            <Route
              path="/analytics"
              element={
                <Analytics transactions={transactions} />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
