import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { FC } from 'react';

const NAVIGATION_ITEMS = [
    { label: 'Home', path: '/' },
    { label: 'Solutions', path: '/solutions' },
    { label: 'Work', path: '/work' },
    { label: 'Installation', path: '/installation' },
    { label: 'Contact', path: '/contact' },
];

const Navbar: FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed w-full z-50 bg-black/80 backdrop-blur-lg border-b border-white/10 shadow-lg"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                            <span className="text-white font-bold text-xl">PF</span>
                        </div>
                        <span className="text-white text-lg font-semibold">Premium Flooring</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-6">
                        {NAVIGATION_ITEMS.map((item) => (
                            <Link
                                key={item.label}
                                to={item.path}
                                className="text-white hover:text-purple-500 transition-colors duration-300"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white focus:outline-none"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="md:hidden bg-black/90 backdrop-blur-lg border-t border-white/10"
                >
                    <div className="px-4 py-4 space-y-2">
                        {NAVIGATION_ITEMS.map((item) => (
                            <Link
                                key={item.label}
                                to={item.path}
                                onClick={() => setIsMenuOpen(false)}
                                className="block text-white hover:text-purple-500 transition-colors duration-300"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar;
