import { motion } from 'framer-motion';

const Installation = () => {
    const steps = [
        {
            step: '01',
            title: 'Initial Consultation',
            desc: 'In-depth discussion of your vision, requirements, and space assessment to ensure perfect flooring selection.',
            icon: '✧'
        },
        {
            step: '02',
            title: 'Site Preparation',
            desc: 'Thorough evaluation and preparation of the installation area following industry-leading standards.',
            icon: '◇'
        },
        {
            step: '03',
            title: 'Expert Installation',
            desc: 'Meticulous installation process by our certified craftsmen using premium techniques and tools.',
            icon: '⬡'
        },
        {
            step: '04',
            title: 'Quality Assurance',
            desc: 'Comprehensive inspection and refinement to ensure flawless execution and lasting beauty.',
            icon: '◈'
        }
    ];

    return (
        <section className="min-h-screen bg-[#1a1310] pt-20">
            {/* Header Section */}
            <div className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 py-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16 relative z-10"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-200 to-amber-100 bg-clip-text text-transparent mb-6">
                            Masterful Installation
                        </h1>
                        <p className="text-xl text-amber-100/80 max-w-2xl mx-auto">
                            Experience the perfect fusion of artisanal craftsmanship and modern precision
                        </p>
                    </motion.div>

                    {/* Main Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Image Section */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-200/20 to-amber-100/20 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                            <img
                                src="/api/placeholder/800/600"
                                alt="Installation Process"
                                className="relative rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500 object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1310] via-transparent to-transparent rounded-2xl" />
                        </motion.div>

                        {/* Steps Section */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            {steps.map((item, idx) => (
                                <motion.div
                                    key={item.step}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group"
                                >
                                    <div className="p-6 rounded-xl bg-amber-100/5 hover:bg-amber-100/10 
                                        transition-colors duration-300 border border-amber-100/10 
                                        hover:border-amber-100/20"
                                    >
                                        <div className="flex items-start gap-6">
                                            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center 
                                                rounded-lg bg-gradient-to-r from-amber-200/10 to-amber-100/10
                                                text-amber-100"
                                            >
                                                <span className="text-2xl">{item.icon}</span>
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <span className="text-sm font-light text-amber-100/60">
                                                        {item.step}
                                                    </span>
                                                    <h3 className="text-xl font-medium text-amber-100 
                                                        group-hover:text-amber-200 transition-colors duration-300"
                                                    >
                                                        {item.title}
                                                    </h3>
                                                </div>
                                                <p className="text-amber-100/70 leading-relaxed">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Installation;