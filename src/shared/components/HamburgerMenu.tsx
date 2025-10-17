import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeSwitcher } from './ThemeSwitcher';

interface MenuItem {
  label: string;
  path: string;
}

const menuItems: MenuItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Shop', path: '/shop' },
  { label: 'Travel', path: '/travel' },
  { label: 'Dining', path: '/dining' },
  { label: 'Entertainment', path: '/entertainment' },
  { label: 'Learn more', path: '/product' },
];

export const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className={`cursor-pointer animate-appear-up fixed top-6 right-6 z-50 w-10 h-10 flex flex-col justify-center items-center rounded-lg shadow-2xl-dark dark:shadow-2xl-light transition-colors duration-500 ${isOpen ? 'bg-white dark:bg-black ' : 'bg-white dark:bg-transparent ' } `}
        aria-label="Toggle menu"
        style={{animationDelay:"1s"}}
      >
        <motion.div
          animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          className="w-6 h-0.5 bg-gray-800 dark:bg-white mb-1 shadow-2xl-light"
        />
        <motion.div
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          className="w-6 h-0.5 bg-gray-800 dark:bg-white mb-1 shadow-2xl-light"
        />
        <motion.div
          animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          className="w-6 h-0.5 bg-gray-800 dark:bg-white shadow-2xl-light"
        />
      </button>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 backdrop-blur-3xl z-40"
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-80 bg-white dark:bg-black border-r-2 border-r-white/15 shadow-xl z-40 flex flex-col"
            >
              {/* Menu Header */}
              <div className="p-6 border-b border-gray-200 dark:border-black flex justify-center items-center gap-x-3 ">
                <div className='relative '>
                  <ThemeSwitcher />
                </div>
                <h2 className="text-center text-xl font-semibold text-black dark:text-white grow">
                  Navigation
                </h2>
              </div>

              {/* Menu Items */}
              <nav className="flex-1 p-6 overflow-hidden">
                <ul className="space-y-4 h-full overflow-auto">
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={item.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        preventScrollReset={false}
                        to={item.path}
                        onClick={toggleMenu}
                        className="block py-3 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 rounded-lg transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (menuItems.length+1) * 0.1 }}
                  >
                    <a
                      href="https://uchooseitus.enjoymydeals.com/"
                      target='_blank'
                      onClick={toggleMenu}
                      className="block py-3 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 rounded-lg transition-colors duration-200"
                    >
                      Log In
                    </a>
                  </motion.li>
                </ul>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};