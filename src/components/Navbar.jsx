import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ user, onLogout, isDarkMode, toggleTheme }) => {
    return (
        <nav className="flex justify-between items-center p-4 md:p-6 mb-8 rounded-2xl shadow-neu-flat bg-neu-bg dark:bg-dark-neu-bg dark:shadow-dark-neu-flat transition-colors duration-300 sticky top-4 z-50">
            <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 rounded-full bg-neu-bg shadow-neu-flat flex items-center justify-center text-xl font-bold text-blue-500 dark:bg-dark-neu-bg dark:shadow-dark-neu-flat dark:text-blue-400 shrink-0">
                    $
                </div>
                <h1 className="text-xl md:text-2xl font-bold text-gray-700 tracking-wide hidden sm:block dark:text-dark-neu-text transition-all duration-300">MyFin</h1>

                {user && (
                    <div className="flex gap-2 md:gap-4 ml-2 md:ml-4">
                        <NavLink
                            to="/"
                            className={({ isActive }) => `px-3 md:px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${isActive ? 'bg-neu-bg shadow-neu-pressed text-blue-500 dark:bg-dark-neu-bg dark:shadow-dark-neu-pressed dark:text-blue-400' : 'bg-neu-bg shadow-neu-flat text-gray-500 hover:text-blue-500 hover:shadow-neu-pressed dark:bg-dark-neu-bg dark:shadow-dark-neu-flat dark:text-gray-400 dark:hover:text-blue-400 dark:hover:shadow-dark-neu-pressed'}`}
                        >
                            <span className="text-lg md:hidden">📊</span>
                            <span className="hidden md:inline">Dashboard</span>
                        </NavLink>
                        <NavLink
                            to="/analytics"
                            className={({ isActive }) => `px-3 md:px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${isActive ? 'bg-neu-bg shadow-neu-pressed text-blue-500 dark:bg-dark-neu-bg dark:shadow-dark-neu-pressed dark:text-blue-400' : 'bg-neu-bg shadow-neu-flat text-gray-500 hover:text-blue-500 hover:shadow-neu-pressed dark:bg-dark-neu-bg dark:shadow-dark-neu-flat dark:text-gray-400 dark:hover:text-blue-400 dark:hover:shadow-dark-neu-pressed'}`}
                        >
                            <span className="text-lg md:hidden">📈</span>
                            <span className="hidden md:inline">Analytics</span>
                        </NavLink>
                    </div>
                )}
            </div>

            <div className="flex items-center gap-3 md:gap-4">
                <button
                    onClick={toggleTheme}
                    className="w-10 h-10 rounded-full bg-neu-bg shadow-neu-flat hover:shadow-neu-pressed flex items-center justify-center transition-all duration-300 dark:bg-dark-neu-bg dark:shadow-dark-neu-flat dark:hover:shadow-dark-neu-pressed text-xl shrink-0"
                    title="Toggle Theme"
                >
                    {isDarkMode ? '🌙' : '☀️'}
                </button>

                {user ? (
                    <>
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-neu-bg shadow-neu-flat flex items-center justify-center overflow-hidden dark:bg-dark-neu-bg dark:shadow-dark-neu-flat dark:text-dark-neu-text shrink-0">
                            <span className="text-xs md:text-sm font-bold">{user.email ? user.email[0].toUpperCase() : 'U'}</span>
                        </div>
                        <button
                            className="px-3 md:px-4 py-2 rounded-xl bg-neu-bg shadow-neu-flat hover:shadow-neu-pressed transition-all duration-300 text-xs md:text-sm font-semibold text-red-400 dark:bg-dark-neu-bg dark:shadow-dark-neu-flat dark:hover:shadow-dark-neu-pressed dark:text-red-300 flex items-center gap-2"
                            onClick={onLogout}
                            title="Sign Out"
                        >
                            <span className="text-lg md:hidden">🚪</span>
                            <span className="hidden md:inline">Sign Out</span>
                        </button>
                    </>
                ) : (
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Welcome</div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
