import React from 'react';

const Navbar = ({ user, onLogout }) => {
    return (
        <nav className="flex justify-between items-center p-6 mb-8 rounded-2xl shadow-neu-flat bg-neu-bg">
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-neu-bg shadow-neu-flat flex items-center justify-center text-xl font-bold text-blue-500">
                    $
                </div>
                <h1 className="text-2xl font-bold text-gray-700 tracking-wide">FinTracker</h1>
            </div>

            <div className="flex items-center gap-4">
                {user ? (
                    <>
                        <div className="w-10 h-10 rounded-full bg-neu-bg shadow-neu-flat flex items-center justify-center overflow-hidden">

                            <span className="text-sm font-bold">{user.email ? user.email[0].toUpperCase() : 'U'}</span>
                        </div>
                        <button
                            className="px-4 py-2 rounded-xl bg-neu-bg shadow-neu-flat hover:shadow-neu-pressed transition-all duration-300 text-sm font-semibold text-red-400"
                            onClick={onLogout}
                        >
                            Sign Out
                        </button>
                    </>
                ) : (
                    <div className="text-sm font-medium text-gray-500">Welcome</div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
