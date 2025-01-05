import { motion } from 'framer-motion';
import { FC } from 'react';

const Navbar: FC = () => {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed w-full z-50 bg-black/80 backdrop-blur-lg border-b border-white/10"
        >
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    <motion.div
                        className="flex items-center space-x-2"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl 
                            flex items-center justify-center shadow-lg shadow-blue-500/20">
                            <span className="text-white font-bold text-xl">PF</span>
                        </div>
                        <span className="text-white text-xl font-bold">Premium Flooring</span>
                    </motion.div>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
