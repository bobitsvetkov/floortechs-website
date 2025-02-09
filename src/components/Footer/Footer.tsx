import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const contactInfo = [
        { Icon: Phone, text: '610-573-9895' },
        { Icon: Mail, text: 'ajaber@floor-techs.com' },
        { Icon: MapPin, text: '326 Penn aveWest Reading, Pennsylvania 19611' }
    ];

    return (
        <footer className="relative bg-white overflow-hidden">
            {/* Geometric Pattern Overlay */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 grid grid-cols-6 gap-1">
                    {[...Array(48)].map((_, i) => (
                        <div
                            key={i}
                            className="w-full h-16 bg-blue-100 transform rotate-45"
                            style={{
                                opacity: (i % 3 + 1) * 0.2,
                                transform: `rotate(45deg) translateX(${(i % 3) * 10}px)`
                            }}
                        />
                    ))}
                </div>
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    {/* Company Vision - Left Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-4xl font-bold text-blue-600">
                            Elevating Spaces Through
                            <span className="block mt-2 text-blue-500">
                                Innovation
                            </span>
                        </h3>
                        <p className="text-gray-600 max-w-md leading-relaxed text-lg">
                            Setting new standards in commercial flooring with precision engineering
                            and contemporary design solutions for modern enterprises.
                        </p>
                    </motion.div>

                    {/* Contact Information - Right Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:ml-auto space-y-6"
                    >
                        {contactInfo.map(({ Icon, text }, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ x: 5 }}
                                className="group flex items-center gap-4 text-gray-600 hover:text-blue-600 
                                    transition-colors duration-300"
                            >
                                <div className="w-10 h-10 rounded-lg bg-white/80 backdrop-blur-sm flex items-center 
                                    justify-center group-hover:bg-blue-100 transition-colors duration-300 shadow-sm">
                                    <Icon className="w-5 h-5" />
                                </div>
                                <span className="leading-relaxed">{text}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 pt-8 border-t border-gray-100"
                >
                    <div className="text-gray-500 text-sm text-center">
                        &copy; {currentYear} Floor-Techs. All Rights Reserved.
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;