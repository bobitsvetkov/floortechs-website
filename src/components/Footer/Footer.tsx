import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import {Phone, Mail, MapPin, ChevronRight } from 'lucide-react';
import { BsFacebook, BsInstagram, BsLinkedin} from 'react-icons/bs';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { to: '/', label: 'Home' },
        { to: '/solutions', label: 'Solutions' },
        { to: '/work', label: 'Portfolio' },
        { to: '/installation', label: 'Installation' },
        { to: '/contact', label: 'Contact' }
    ];

    const services = [
        { to: '/residential', label: 'Residential Flooring' },
        { to: '/commercial', label: 'Commercial Solutions' },
        { to: '/consultation', label: 'Design Consultation' },
        { to: '/maintenance', label: 'Maintenance Services' }
    ];

    const socialLinks = [
        { Icon: BsFacebook, href: '#', label: 'Facebook' },
        { Icon: BsInstagram, href: '#', label: 'Instagram' },
        { Icon: BsLinkedin, href: '#', label: 'LinkedIn' }
    ];

    const contactInfo = [
        { Icon: Phone, text: '999999' },
        { Icon: Mail, text: 'sampleEmail@gmail.com' },
        { Icon: MapPin, text: 'Test Address,\nTest Address Line 2' }
    ];

    return (
        <footer className="bg-gray-900 text-white">
            {/* Upper Footer */}
            <div className="bg-blue-600 py-16">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div className="max-w-2xl">
                            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Space?</h3>
                            <p className="text-blue-100 text-lg">
                                Let's discuss your project and create something extraordinary together.
                            </p>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white text-blue-600 rounded-xl font-medium 
                                hover:bg-blue-50 transition-colors flex items-center gap-2"
                        >
                            Schedule Consultation
                            <ChevronRight className="w-5 h-5" />
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold">EXCELLENCE IN FLOORING</h3>
                        <p className="text-gray-400">
                            Setting the standard in premium flooring solutions since 1995.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map(({ Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center
                                        hover:bg-blue-600 transition-colors duration-300"
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
                        <div className="grid gap-4">
                            {quickLinks.map(({ to, label }) => (
                                <Link
                                    key={label}
                                    to={to}
                                    className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2"
                                >
                                    <ChevronRight className="w-4 h-4" />
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Our Services</h4>
                        <div className="grid gap-4">
                            {services.map(({ to, label }) => (
                                <Link
                                    key={label}
                                    to={to}
                                    className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2"
                                >
                                    <ChevronRight className="w-4 h-4" />
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
                        <div className="space-y-4">
                            {contactInfo.map(({ Icon, text }, idx) => (
                                <div key={idx} className="flex items-start gap-3 text-gray-400">
                                    <Icon className="w-5 h-5 mt-1 flex-shrink-0" />
                                    <span className="leading-relaxed">{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-gray-500 text-sm">
                            &copy; {currentYear} Excellence in Flooring. All Rights Reserved.
                        </div>
                        <div className="flex gap-6 text-sm text-gray-500">
                            <Link to="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
                            <Link to="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;