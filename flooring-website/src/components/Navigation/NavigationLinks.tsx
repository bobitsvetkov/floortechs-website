import { motion } from 'framer-motion';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import type { Page } from '../../types/types';

interface NavigationLinksProps {
    currentPage: string;
    setCurrentPage: (page: Page) => void;
}

const NAVIGATION_ITEMS: Page[] = ['home', 'solutions', 'work', 'installation', 'contact'];

const NavigationLinks: FC<NavigationLinksProps> = ({ currentPage, setCurrentPage }) => {
    return (
        <div className="hidden md:flex space-x-1">
            {NAVIGATION_ITEMS.map((page) => (
                <motion.div
                    key={page}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link
                        to={page === 'home' ? '/' : `/${page}`}
                        className={`px-6 py-2 rounded-lg text-sm font-medium relative`}
                        onClick={() => setCurrentPage(page)}
                    >
                        {page}
                        {currentPage === page.toLowerCase() && (
                            <motion.div
                                layoutId="navbar-pill"
                                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg -z-10"
                                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                    </Link>
                </motion.div>
            ))}
        </div>
    );
};

export default NavigationLinks;
