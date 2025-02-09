import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring, MotionValue } from 'framer-motion';
import FeaturedProjects from './Projects';
import background from '../../assets/background.mp4';

const Home: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    const { scrollYProgress } = useScroll();
    const springScroll: MotionValue<number> = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <main ref={containerRef} className="relative min-h-screen w-full bg-white">
            {/* Loading Animation */}
            <motion.div
                initial={false}
                animate={isLoaded ? { height: 0 } : { height: '100vh' }}
                transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                className="fixed inset-0 bg-blue-50 z-50 flex items-center justify-center"
            >
                <motion.div
                    initial={{ opacity: 1, scale: 1 }}
                    animate={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl text-blue-600 font-light tracking-widest"
                >
                    EXCELLENCE IN FLOORING
                </motion.div>
            </motion.div>
            <section className="relative h-screen flex items-center overflow-hidden">
                <div className="absolute inset-0">
                    <video
                        src={background}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover scale-105 brightness-[0.85]"
                    />
                </div>

                {/* Hero Content */}
                <div className="relative max-w-7xl mx-auto px-4 py-32 text-white">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <motion.h1
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="text-5xl lg:text-7xl font-bold leading-tight mb-8"
                        >
                            Elevating Commercial Environments Through Superior Flooring Solutions.
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-lg lg:text-2xl text-white/90 mb-10 max-w-2xl"
                        >
                            Our focus currently lies in commercial flooring installations, where we provide high-quality, durable flooring solutions for a wide range of industries.
                        </motion.p>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }}>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full text-lg focus:outline-none">
                                View Our Commercial Projects
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* "Why Choose Us" Section */}
            <section id="services" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">
                        Why Choose Us for Commercial Flooring?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 bg-white shadow rounded transition transform hover:-translate-y-1 hover:shadow-lg">
                            <h3 className="text-xl font-semibold text-blue-600 mb-2">Template Text. Will ask later.</h3>
                            <p className="text-gray-700">
                                Template Text. Will ask later.
                            </p>
                        </div>
                        <div className="p-6 bg-white shadow rounded transition transform hover:-translate-y-1 hover:shadow-lg">
                            <h3 className="text-xl font-semibold text-blue-600 mb-2">Template Text. Will ask later.</h3>
                            <p className="text-gray-700">
                                Template Text. Will ask later.
                            </p>
                        </div>
                        <div className="p-6 bg-white shadow rounded transition transform hover:-translate-y-1 hover:shadow-lg">
                            <h3 className="text-xl font-semibold text-blue-600 mb-2">Template Text. Will ask later.</h3>
                            <p className="text-gray-700">
                                Template Text. Will ask later.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <FeaturedProjects />

            {/* Scroll Progress Bar */}
            <motion.div
                style={{ scaleX: springScroll }}
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400 transform origin-left z-50"
            />
        </main>
    );
};

export default Home;
