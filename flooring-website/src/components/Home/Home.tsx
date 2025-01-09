import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring, MotionValue } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import FeaturedProjects from './Projects';

const Home: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    const { scrollYProgress } = useScroll();

    const springScroll: MotionValue<number> = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <main ref={containerRef} className="relative min-h-screen w-full bg-[#1a1310]">
            {/* Loading Animation */}
            <motion.div
                initial={false}
                animate={isLoaded ? { height: 0 } : { height: "100vh" }}
                transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                className="fixed inset-0 bg-[#0a0807] z-50 flex items-center justify-center"
            >
                <motion.div
                    initial={{ opacity: 1, scale: 1 }}
                    animate={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl text-amber-100 font-light tracking-widest"
                >
                    EXCELLENCE IN FLOORING
                </motion.div>
            </motion.div>

            {/* Hero Section */}
            <section className="relative h-screen flex items-center overflow-hidden bg-gradient-to-b from-[#0a0807] to-[#1a1310]">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <motion.div
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
                        className="relative w-full h-full"
                    >
                        <img
                            src="/api/placeholder/1920/1080"
                            alt="Luxury Flooring"
                            className="w-full h-full object-cover opacity-60"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0807]/90 via-[#1a1310]/80 to-[#1a1310]" />
                    </motion.div>
                </div>

                {/* Hero Content */}
                <div className="relative max-w-7xl mx-auto px-4 py-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <motion.h1
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="mb-6"
                        >
                            <span className="text-7xl font-bold leading-tight bg-gradient-to-r from-amber-200 to-amber-100 bg-clip-text text-transparent">
                                Transform Your Space
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-xl text-amber-100/80 mb-8"
                        >
                            Experience the perfect blend of luxury and durability with our premium flooring solutions
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="flex gap-4"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group px-8 py-4 bg-amber-100 text-[#0a0807] rounded-xl 
                                    font-medium overflow-hidden hover:bg-amber-200 transition-all duration-300 
                                    flex items-center gap-2"
                            >
                                Explore Our Collection
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 border-2 border-amber-100 text-amber-100 rounded-xl
                                    hover:bg-amber-100 hover:text-[#0a0807] transition-all duration-300"
                            >
                                Book Consultation
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                >
                    <ChevronDown className="w-8 h-8 text-amber-100/60" />
                </motion.div>
            </section>

            <FeaturedProjects />

            {/* Scroll Progress Bar */}
            <motion.div
                style={{ scaleX: springScroll }}
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-200 to-amber-100/80 
                    transform origin-left z-50"
            />
        </main>
    );
};

export default Home;