import { motion } from 'framer-motion';
import { ArrowRight, Clock, MapPin, Award } from 'lucide-react';

const Work = () => {
    const projects = [
        {
            title: "Luxury Villa Renovation",
            location: "Beverly Hills",
            duration: "6 weeks",
            area: "4,500 sq ft",
            description: "Complete hardwood flooring installation with custom inlay patterns",
            award: "Best Residential Project 2024",
            type: "Residential"
        },
        {
            title: "Grand Hotel Lobby",
            location: "Manhattan",
            duration: "8 weeks",
            area: "12,000 sq ft",
            description: "Premium marble and hardwood combination with geometric designs",
            award: "Excellence in Commercial Design",
            type: "Commercial"
        },
        {
            title: "Historic Museum Restoration",
            location: "Chicago",
            duration: "12 weeks",
            area: "8,000 sq ft",
            description: "Restoration of century-old hardwood with modern preservation techniques",
            award: "Heritage Preservation Award",
            type: "Heritage"
        },
        {
            title: "Modern Office Complex",
            location: "San Francisco",
            duration: "10 weeks",
            area: "15,000 sq ft",
            description: "Contemporary luxury vinyl installation with acoustic underlayment",
            award: "Innovation in Design",
            type: "Commercial"
        },
        {
            title: "Beachfront Residence",
            location: "Miami",
            duration: "5 weeks",
            area: "3,800 sq ft",
            description: "Weather-resistant engineered hardwood with coastal aesthetics",
            award: "Best Coastal Design",
            type: "Residential"
        },
        {
            title: "Boutique Hotel Suites",
            location: "Los Angeles",
            duration: "9 weeks",
            area: "7,200 sq ft",
            description: "Custom pattern wool carpeting with hardwood borders",
            award: "Hospitality Excellence",
            type: "Hospitality"
        }
    ];

    return (
        <section className="min-h-screen bg-[#1a1310] pt-20">
            <div className="max-w-7xl mx-auto px-4 py-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-amber-200 to-amber-100 bg-clip-text text-transparent mb-6">
                        Portfolio of Excellence
                    </h1>
                    <p className="text-xl text-amber-100/80 max-w-2xl mx-auto">
                        A showcase of our finest flooring installations, where precision meets artistic vision
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative"
                        >
                            <div className="relative rounded-2xl overflow-hidden bg-amber-100/5 border border-amber-100/10 
                                hover:border-amber-100/30 transition-all duration-500">
                                {/* Project Image */}
                                <div className="relative h-80 overflow-hidden">
                                    <img
                                        src={`/api/placeholder/800/600`}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform scale-105 group-hover:scale-110
                                            transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a1310]/50 to-[#1a1310]" />

                                    {/* Project Type Badge */}
                                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-sm
                                        bg-amber-100/10 backdrop-blur-sm text-amber-100 border border-amber-100/20">
                                        {project.type}
                                    </div>
                                </div>

                                {/* Project Details */}
                                <div className="p-6">
                                    <h3 className="text-2xl font-semibold text-amber-100 mb-3">{project.title}</h3>
                                    <p className="text-amber-100/70 mb-4 line-clamp-2">{project.description}</p>

                                    {/* Project Metadata */}
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div className="flex items-center gap-2 text-amber-100/60">
                                            <MapPin className="w-4 h-4" />
                                            <span className="text-sm">{project.location}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-amber-100/60">
                                            <Clock className="w-4 h-4" />
                                            <span className="text-sm">{project.duration}</span>
                                        </div>
                                    </div>

                                    {/* Award Badge */}
                                    <div className="flex items-center gap-2 mb-6 text-amber-200">
                                        <Award className="w-4 h-4" />
                                        <span className="text-sm">{project.award}</span>
                                    </div>

                                    {/* View Details Button */}
                                    <motion.button
                                        whileHover={{ x: 5 }}
                                        className="flex items-center gap-2 text-amber-200 hover:text-amber-100
                                            transition-colors duration-300"
                                    >
                                        View Project Details
                                        <ArrowRight className="w-4 h-4" />
                                    </motion.button>
                                </div>

                                {/* Hover Overlay */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-amber-200/10 to-amber-100/10
                                        opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;