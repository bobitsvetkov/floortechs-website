import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight} from 'lucide-react';
import firstProjectBefore from '../../assets/showcaseProjectBefore1.jpg';
import firstProjectAfter from '../../assets/showcaseProjectAfter1.jpg';
import secondProjectBefore from '../../assets/showcaseProjectBefore2.jpg';
import secondProjectAfter from '../../assets/showcaseProjectAfter2.jpg';
import thirdProjectBefore from '../../assets/showcaseProjectBefore3.jpg'
import thirdProjectAfter from '../../assets/showcaseProjectAfter3.jpg'
const FeaturedProjects = () => {
    const [currentProject, setCurrentProject] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const projects = [
        {
            title: "Polish for Dicks Sporting Goods in (Rochester, New York)",
            transformationDetails: "The existing porous floor was restored by filling all holes with grout for a smooth surface. It was then polished and treated with an acetone dye, enhancing the natural finish and creating a seamless, durable, and visually refined look.",
            beforeImage: firstProjectBefore,
            afterImage: firstProjectAfter
        },
        {
            title: "Epoxy for Kitchen: Waterproof & Durable Solution",
            transformationDetails: "Durable, waterproof, and seamless. Resists moisture, stains, and wear while offering a sleek, customizable finish for lasting style and performance.",
            beforeImage: secondProjectBefore,
            afterImage: secondProjectAfter
        },
        {
            title: "Template",
            transformationDetails: "Template text. Will ask later.",
            beforeImage: thirdProjectBefore,
            afterImage: thirdProjectAfter
        }
    ];

    const nextProject = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentProject((prev) => (prev + 1) % projects.length);
        setTimeout(() => setIsTransitioning(false), 1000);
    };

    const previousProject = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
        setTimeout(() => setIsTransitioning(false), 1000);
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') previousProject();
            if (e.key === 'ArrowRight') nextProject();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    });

    return (
        <section className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-16">
            <div className="max-w-[1200px] mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-6xl font-bold text-blue-500 mb-4">
                        Our Projects
                    </h2>
                </motion.div>

                {/* Main Project Display with Navigation */}
                <div className="relative">
                    {/* Navigation Buttons */}
                    <motion.button
                        onClick={previousProject}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-4 rounded-full bg-white shadow-lg text-blue-600 transition-all duration-300 hover:bg-blue-50 z-10 focus:outline-none"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </motion.button>

                    <motion.button
                        onClick={nextProject}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-4 rounded-full bg-white shadow-lg text-blue-600 transition-all duration-300 hover:bg-blue-50 z-10 focus:outline-none"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </motion.button>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentProject}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            {/* Main Transformation Images */}
                            <div className="grid grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="relative group rounded-2xl overflow-hidden shadow-lg"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-b from-blue-500/0 to-blue-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <img
                                        src={projects[currentProject].beforeImage}
                                        alt="Before"
                                        className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute bottom-6 left-6 text-2xl font-light text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        Before
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="relative group rounded-2xl overflow-hidden shadow-lg"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-b from-blue-500/0 to-blue-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <img
                                        src={projects[currentProject].afterImage}
                                        alt="After"
                                        className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute bottom-6 right-6 text-2xl font-light text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        After
                                    </div>
                                </motion.div>
                            </div>

                            {/* Project Description */}
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center text-xl text-blue-700 max-w-3xl mx-auto mb-12"
                            >
                                {projects[currentProject].transformationDetails}
                            </motion.p>
                        </motion.div>
                    </AnimatePresence>

                    {/* Project Indicators */}
                    <div className="flex justify-center gap-3">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentProject(index)}
                                className={`w-16 h-1 rounded-full transition-all duration-300 ${currentProject === index ? 'bg-blue-500' : 'bg-blue-200'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;