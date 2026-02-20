import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ user, onLogout, isDarkMode, toggleTheme }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <nav className="relative z-50 mb-8">
            <div className="flex justify-between items-center p-4 md:p-6 rounded-2xl shadow-neu-flat bg-neu-bg dark:bg-dark-neu-bg dark:shadow-dark-neu-flat transition-colors duration-300">
                {/* Logo */}
                <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-10 h-10 rounded-full bg-neu-bg shadow-neu-flat flex items-center justify-center text-xl font-bold text-blue-500 dark:bg-dark-neu-bg dark:shadow-dark-neu-flat dark:text-blue-400 shrink-0">
                        $
                    </div>
                    <h1 className="text-xl md:text-2xl font-bold text-gray-700 tracking-wide dark:text-dark-neu-text transition-all duration-300">MyFin</h1>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-4 transition-all duration-300">
                    {user && (
                        <div className="flex gap-4 mr-4">
                            <NavLink
                                to="/"
                                className={({ isActive }) => `px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${isActive ? 'bg-neu-bg shadow-neu-pressed text-blue-500 dark:bg-dark-neu-bg dark:shadow-dark-neu-pressed dark:text-blue-400' : 'bg-neu-bg shadow-neu-flat text-gray-500 hover:text-blue-500 hover:shadow-neu-pressed dark:bg-dark-neu-bg dark:shadow-dark-neu-flat dark:text-gray-400 dark:hover:text-blue-400 dark:hover:shadow-dark-neu-pressed'}`}
                            >
                                Dashboard
                            </NavLink>
                            <NavLink
                                to="/analytics"
                                className={({ isActive }) => `px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${isActive ? 'bg-neu-bg shadow-neu-pressed text-blue-500 dark:bg-dark-neu-bg dark:shadow-dark-neu-pressed dark:text-blue-400' : 'bg-neu-bg shadow-neu-flat text-gray-500 hover:text-blue-500 hover:shadow-neu-pressed dark:bg-dark-neu-bg dark:shadow-dark-neu-flat dark:text-gray-400 dark:hover:text-blue-400 dark:hover:shadow-dark-neu-pressed'}`}
                            >
                                Analytics
                            </NavLink>
                        </div>
                    )}

                    <button
                        onClick={toggleTheme}
                        className="w-10 h-10 rounded-full bg-neu-bg shadow-neu-flat hover:shadow-neu-pressed flex items-center justify-center transition-all duration-300 dark:bg-dark-neu-bg dark:shadow-dark-neu-flat dark:hover:shadow-dark-neu-pressed text-xl shrink-0"
                        title="Toggle Theme"
                    >
                        {isDarkMode ? '🌙' : '☀️'}
                    </button>

                    {user ? (
                        <>
                            <div className="w-10 h-10 rounded-full bg-neu-bg shadow-neu-flat flex items-center justify-center overflow-hidden dark:bg-dark-neu-bg dark:shadow-dark-neu-flat dark:text-dark-neu-text shrink-0">
                                <span className="text-sm font-bold">{user.email ? user.email[0].toUpperCase() : 'U'}</span>
                            </div>
                            <button
                                className="px-4 py-2 rounded-xl bg-neu-bg shadow-neu-flat hover:shadow-neu-pressed transition-all duration-300 text-sm font-semibold text-red-400 dark:bg-dark-neu-bg dark:shadow-dark-neu-flat dark:hover:shadow-dark-neu-pressed dark:text-red-300"
                                onClick={onLogout}
                            >
                                Sign Out
                            </button>
                        </>
                    ) : (
                        <NavLink
                            to="/auth"
                            className="px-6 py-2 rounded-xl bg-neu-bg shadow-neu-flat hover:shadow-neu-pressed transition-all duration-300 text-sm font-semibold text-blue-500 dark:bg-dark-neu-bg dark:shadow-dark-neu-flat dark:hover:shadow-dark-neu-pressed dark:text-blue-400"
                        >
                            Login
                        </NavLink>
                    )}
                </div>

                {/* Mobile Hamburger Button */}
                <div className="md:hidden flex items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        className="w-10 h-10 rounded-full bg-neu-bg shadow-neu-flat hover:shadow-neu-pressed flex items-center justify-center transition-all duration-300 dark:bg-dark-neu-bg dark:shadow-dark-neu-flat dark:hover:shadow-dark-neu-pressed text-xl shrink-0"
                        title="Toggle Theme"
                    >
                        {isDarkMode ? '🌙' : '☀️'}
                    </button>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="w-10 h-10 rounded-xl bg-neu-bg shadow-neu-flat hover:shadow-neu-pressed flex items-center justify-center text-gray-600 dark:bg-dark-neu-bg dark:shadow-dark-neu-flat dark:text-dark-neu-text transition-all duration-300"
                    >
                        {isMenuOpen ? '✕' : '☰'}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 mt-4 p-4 rounded-2xl bg-neu-bg shadow-neu-flat dark:bg-dark-neu-bg dark:shadow-dark-neu-flat flex flex-col gap-4 animate-fade-in z-50">
                    {user ? (
                        <>
                            <div className="flex items-center gap-3 p-2 border-b border-gray-200 dark:border-gray-700 pb-4">
                                <div className="w-8 h-8 rounded-full bg-neu-bg shadow-neu-pressed flex items-center justify-center overflow-hidden dark:bg-dark-neu-bg dark:shadow-dark-neu-pressed dark:text-dark-neu-text">
                                    <span className="text-xs font-bold">{user.email ? user.email[0].toUpperCase() : 'U'}</span>
                                </div>
                                <span className="text-sm font-medium text-gray-600 dark:text-gray-300 truncate">{user.email}</span>
                            </div>
                            <NavLink
                                to="/"
                                onClick={closeMenu}
                                className={({ isActive }) => `p-3 rounded-xl text-center font-semibold transition-all duration-300 ${isActive ? 'bg-neu-bg shadow-neu-pressed text-blue-500 dark:bg-dark-neu-bg dark:shadow-dark-neu-pressed dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'}`}
                            >
                                Dashboard
                            </NavLink>
                            <NavLink
                                to="/analytics"
                                onClick={closeMenu}
                                className={({ isActive }) => `p-3 rounded-xl text-center font-semibold transition-all duration-300 ${isActive ? 'bg-neu-bg shadow-neu-pressed text-blue-500 dark:bg-dark-neu-bg dark:shadow-dark-neu-pressed dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'}`}
                            >
                                Analytics
                            </NavLink>
                            <button
                                className="p-3 rounded-xl bg-neu-bg shadow-neu-flat active:shadow-neu-pressed text-red-400 font-bold dark:bg-dark-neu-bg dark:shadow-dark-neu-flat dark:text-red-300 transition-all duration-300"
                                onClick={() => { onLogout(); closeMenu(); }}
                            >
                                Sign Out
                            </button>
                        </>
                    ) : (
                        <NavLink
                            to="/auth"
                            onClick={closeMenu}
                            className="p-3 rounded-xl bg-neu-bg shadow-neu-flat active:shadow-neu-pressed text-blue-500 font-bold text-center dark:bg-dark-neu-bg dark:shadow-dark-neu-flat dark:text-blue-400 transition-all duration-300"
                        >
                            Login
                        </NavLink>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
