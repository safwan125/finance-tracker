import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleAuth = async (e) => {
        e.preventDefault();
        setError('');
        try {
            if (isLogin) {
                await signInWithEmailAndPassword(auth, email, password);
            } else {
                await createUserWithEmailAndPassword(auth, email, password);
            }
        } catch (err) {
            // Improve error message readability
            const msg = err.message.replace('Firebase: ', '').replace('auth/', '');
            setError(msg);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-neu-bg p-4 font-sans text-neu-text">
            <div className="w-full max-w-md p-10 rounded-3xl bg-neu-bg shadow-neu-flat">
                <h2 className="text-3xl font-extrabold text-center text-gray-700 mb-8 tracking-tight">
                    {isLogin ? 'Welcome Back' : 'Create Account'}
                </h2>

                {error && <div className="bg-red-100 text-red-500 text-sm p-3 rounded-lg mb-6 shadow-sm text-center font-medium capitalize">{error}</div>}

                <form onSubmit={handleAuth} className="flex flex-col gap-6">
                    <input
                        type="email"
                        placeholder="Email Address"
                        required
                        className="p-4 rounded-xl bg-neu-bg shadow-[inset_6px_6px_10px_0_rgba(163,177,198,0.7),inset_-6px_-6px_10px_0_rgba(255,255,255,0.8)] border-none outline-none text-gray-700 placeholder-gray-400"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        required
                        className="p-4 rounded-xl bg-neu-bg shadow-[inset_6px_6px_10px_0_rgba(163,177,198,0.7),inset_-6px_-6px_10px_0_rgba(255,255,255,0.8)] border-none outline-none text-gray-700 placeholder-gray-400"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                        type="submit"
                        className="mt-4 py-4 rounded-xl bg-neu-bg shadow-neu-flat text-blue-500 font-bold text-lg hover:shadow-neu-pressed transition-all duration-300 transform active:scale-95"
                    >
                        {isLogin ? 'Sign In' : 'Sign Up'}
                    </button>
                </form>

                <div className="mt-8 text-center">
                    <button
                        className="text-gray-500 text-sm font-medium hover:text-blue-500 transition-colors"
                        onClick={() => setIsLogin(!isLogin)}
                    >
                        {isLogin ? "New here? Create an account" : "Already have an account? Sign In"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Auth;
