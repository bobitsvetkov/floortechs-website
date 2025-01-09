import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Solutions = () => {
    const solutions = [
        {
            name: 'Artisan Hardwood',
            desc: 'Hand-selected premium hardwood flooring that transforms spaces with timeless sophistication and natural warmth.',
            features: ['Quarter-sawn oak', 'Brazilian walnut', 'Reclaimed teak'],
            image: '/api/placeholder/800/1000'
        },
        {
            name: 'Designer Laminate',
            desc: 'Revolutionary laminate solutions combining cutting-edge technology with stunning aesthetics for modern living.',
            features: ['Stone-plastic composite', 'German engineering', 'Acoustical underlayment'],
            image: '/api/placeholder/800/1000'
        },
        {
            name: 'Luxury Vinyl',
            desc: 'State-of-the-art vinyl flooring offering unparalleled durability with the elegant appearance of natural materials.',
            features: ['Waterproof core', 'Commercial grade', 'Designer patterns'],
            image: '/api/placeholder/800/1000'
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
                        Exceptional Flooring
                    </h1>
                    <p className="text-xl text-amber-100/80 max-w-2xl mx-auto">
                        Discover our curated collection of premium flooring solutions, where innovation meets timeless elegance
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {solutions.map((solution, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="group relative"
                        >
                            <div className="relative h-[600px] rounded-2xl overflow-hidden">
                                {/* Background Gradient Animation */}
                                <motion.div
                                    className="absolute -inset-2 bg-gradient-to-r from-amber-200/20 to-amber-100/20 blur-2xl opacity-0 
                                        group-hover:opacity-70 transition-opacity duration-700"
                                    animate={{
                                        rotate: [0, 360],
                                    }}
                                    transition={{
                                        duration: 10,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                />

                                {/* Main Content */}
                                <div className="relative h-full bg-amber-100/5 rounded-2xl overflow-hidden 
                                    border border-amber-100/10 group-hover:border-amber-100/30 transition-colors duration-500"
                                >
                                    {/* Image */}
                                    <div className="h-2/3 overflow-hidden">
                                        <img
                                            src={solution.image}
                                            alt={solution.name}
                                            className="w-full h-full object-cover transform scale-110 group-hover:scale-105 
                                                transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a1310]/50 to-[#1a1310]" />
                                    </div>

                                    {/* Content */}
                                    <div className="absolute bottom-0 left-0 right-0 p-8">
                                        <h2 className="text-3xl font-semibold text-amber-100 mb-4">{solution.name}</h2>
                                        <p className="text-amber-100/70 mb-6 line-clamp-2 group-hover:line-clamp-none 
                                            transition-all duration-300">
                                            {solution.desc}
                                        </p>

                                        {/* Features */}
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            whileInView={{ opacity: 1, height: 'auto' }}
                                            className="space-y-2 mb-6 hidden group-hover:block"
                                        >
                                            {solution.features.map((feature, fidx) => (
                                                <div key={fidx} className="flex items-center gap-2 text-amber-100/60">
                                                    <span className="text-xs">✧</span>
                                                    <span>{feature}</span>
                                                </div>
                                            ))}
                                        </motion.div>

                                        {/* Button */}
                                        <motion.button
                                            whileHover={{ x: 5 }}
                                            className="flex items-center gap-2 text-amber-200 hover:text-amber-100 
                                                transition-colors duration-300"
                                        >
                                            Explore Collection
                                            <ArrowRight className="w-4 h-4" />
                                        </motion.button>
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

export default Solutions;