import { motion } from "framer-motion";

const FeaturedProjects = () => {
    const projects = [
        {
            title: "Luxury Villa Flooring",
            category: "Residential",
            description: "Custom marble and hardwood installation.",
            imageUrl: "/images/projects/luxury-villa.jpg",
        },
        {
            title: "Grand Hotel Renovation",
            category: "Commercial",
            description: "Premium carpet and stone flooring.",
            imageUrl: "/images/projects/grand-hotel.jpg",
        },
        {
            title: "Modern Office Complex",
            category: "Corporate",
            description: "Sustainable bamboo flooring solution.",
            imageUrl: "/images/projects/modern-office.jpg",
        },
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-[#1a1310] to-[#0f0d0b]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl font-bold text-amber-100 tracking-tight mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-lg text-amber-100/80">
                        Discover our finest craftsmanship in action.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="group relative rounded-xl overflow-hidden shadow-lg"
                        >
                            {/* Image Section */}
                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* Overlay Content */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <motion.div
                                        className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500"
                                    >
                                        <span className="block text-amber-200/80 text-sm mb-2">
                                            {project.category}
                                        </span>
                                        <h3 className="text-2xl font-semibold text-amber-100 mb-3">
                                            {project.title}
                                        </h3>
                                        <p className="text-amber-100/70 mb-4">{project.description}</p>
                                        <button
                                            className="px-5 py-2 bg-amber-100 text-[#1a1310] font-medium rounded-lg 
                                                hover:bg-amber-200 transition-all duration-300"
                                        >
                                            View Project
                                        </button>
                                    </motion.div>
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
