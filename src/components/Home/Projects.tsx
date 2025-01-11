import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
// import { Link } from 'react-router-dom';
// import { Phone, Mail, MapPin, ArrowUpRight, ChevronRight } from 'lucide-react';
// import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';

const FeaturedProjects = () => {
    const projects = [
        {
            title: "Luxury Villa Flooring",
            category: "Residential",
            description: "Custom marble and hardwood installation with intricate patterns and premium finishes.",
            stats: { area: "850 m²", duration: "6 weeks", material: "Italian Marble" },
            imageUrl: "/api/placeholder/800/600"
        },
        {
            title: "Grand Hotel Renovation",
            category: "Commercial",
            description: "Premium carpet and stone flooring designed for high traffic and lasting elegance.",
            stats: { area: "2,400 m²", duration: "12 weeks", material: "Natural Stone" },
            imageUrl: "/api/placeholder/800/600"
        },
        {
            title: "Modern Office Complex",
            category: "Corporate",
            description: "Sustainable bamboo flooring solution with acoustic optimization.",
            stats: { area: "1,600 m²", duration: "8 weeks", material: "Bamboo" },
            imageUrl: "/api/placeholder/800/600"
        }
    ];

    return (
        <section className="py-32 bg-gradient-to-b from-white to-blue-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <span className="block text-blue-600 font-medium mb-4">Our Portfolio</span>
                    <h2 className="text-5xl font-bold text-gray-900 tracking-tight mb-6">
                        Featured Projects
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl">
                        Discover how we transform spaces through innovative flooring solutions and impeccable craftsmanship.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                                        {project.category}
                                    </span>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                                    >
                                        <ArrowUpRight className="w-5 h-5" />
                                    </motion.button>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                                <p className="text-gray-600 mb-6">{project.description}</p>

                                {/* Project Stats */}
                                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
                                    {Object.entries(project.stats).map(([key, value], i) => (
                                        <div key={i}>
                                            <p className="text-sm text-gray-500">{key}</p>
                                            <p className="text-gray-900 font-semibold">{value}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;
