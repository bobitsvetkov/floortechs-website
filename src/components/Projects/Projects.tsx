import { motion } from 'framer-motion';
import { MapPin, Clock } from 'lucide-react';
import firstProjectAfter from '../../assets/showcaseProjectAfter1.jpg';
import secondProjectAfter from '../../assets/showcaseProjectAfter2.jpg';
import poolDeck from '../../assets/poolImage.jpg'

const Projects = () => {
    const projects = [
        {
            name: 'Polish for Dicks Sporting Goods',
            description: 'The existing porous floor was restored by filling all holes with grout for a smooth surface. It was then polished and treated with an acetone dye, enhancing the natural finish and creating a seamless, durable, and visually refined look.',
            location: 'Rochester, New York',
            duration: 'template',
            image: firstProjectAfter
        },
        {
            name: 'Epoxy for Kitchen: Waterproof & Durable Solution',
            description: 'Durable, waterproof, and seamless. Resists moisture, stains, and wear while offering a sleek, customizable finish for lasting style and performance',
            location: 'template',
            duration: 'template',
            image: secondProjectAfter
        },
        {
            name: 'Pool Deck: Mount Airy Casino Resort',
            description: 'Double quarts broadcast with polyaspartic top coat',
            location: 'Mt Pocono, Pa',
            duration: 'template',
            image: poolDeck
        }
    ];

    return (
        <section className="min-h-screen bg-gray-50 pt-20">
            <div className="max-w-7xl mx-auto px-4 py-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h1 className="text-6xl md:text-7xl font-bold text-blue-600 mb-6">
                        Our Projects
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        A showcase of our finest flooring installations, where precision meets design excellence
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="group"
                        >
                            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl 
                                transition-all duration-300 transform hover:-translate-y-1">
                                {/* Image */}
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="w-full h-full object-cover transform scale-105 group-hover:scale-110 
                                            transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 
                                        transition-colors duration-300">
                                        {project.name}
                                    </h2>

                                    <p className="text-gray-600 mb-6">
                                        {project.description}
                                    </p>

                                    {/* Project Details */}
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2 text-gray-500">
                                            <MapPin className="w-4 h-4 text-blue-500" />
                                            <span>{project.location}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-500">
                                            <Clock className="w-4 h-4 text-blue-500" />
                                            <span>Duration: {project.duration}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;