import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../../assets/logo.png'
import type { FC } from 'react';

const NAVIGATION_ITEMS = [
    { label: 'Home', path: '/' },
    { label: 'Solutions', path: '/solutions' },
    { label: 'Contact', path: '/contact' },
];

const Navbar: FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed w-full z-50 bg-white shadow-md border-b border-blue-100"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <img src={logo} alt="FloorTechs Logo" className="h-10 w-auto object-contain" />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {NAVIGATION_ITEMS.map((item) => (
                            <Link
                                key={item.label}
                                to={item.path}
                                className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300 
                                    relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 
                                    after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform 
                                    after:duration-300"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-blue-600 focus:outline-none hover:text-blue-800 transition-colors duration-300"
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
                    className="md:hidden bg-white border-t border-blue-100"
                >
                    <div className="px-4 py-4 space-y-3">
                        {NAVIGATION_ITEMS.map((item) => (
                            <Link
                                key={item.label}
                                to={item.path}
                                onClick={() => setIsMenuOpen(false)}
                                className="block text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300"
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
