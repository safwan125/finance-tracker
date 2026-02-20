import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-8 mt-auto bg-neu-bg dark:bg-dark-neu-bg text-center text-gray-500 dark:text-gray-400 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        </div>
        <div className="border-t border-gray-300 dark:border-gray-700 pt-6">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} MyFin Personal Finance Tracker. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;