import { Link } from 'react-router-dom';
import {Phone, Mail, MapPin } from 'lucide-react';
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { to: '/', label: 'Home' },
        { to: '/solutions', label: 'Solutions' },
        { to: '/work', label: 'Work' },
        { to: '/installation', label: 'Installation' },
        { to: '/contact', label: 'Contact' }
    ];

    // const services = [
    //     { to: '/residential', label: 'Residential' },
    //     { to: '/commercial', label: 'Commercial' },
    //     { to: '/consultation', label: 'Consultation' },
    //     { to: '/maintenance', label: 'Maintenance' }
    // ];

    const socialLinks = [
        { Icon: BsFacebook, href: '#' },
        { Icon: BsInstagram, href: '#' },
        { Icon: BsLinkedin, href: '#' }
    ];

    const contactInfo = [
        { Icon: Phone, text: '999999' },
        { Icon: Mail, text: 'sampleEmail@gmail.com' },
        { Icon: MapPin, text: 'Test Address,\nTest Address Line 2' }
    ];

    return (
        <footer className="bg-[#0a0807] text-amber-100 py-16 border-t border-amber-100/10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold tracking-wider">EXCELLENCE IN FLOORING</h3>
                        <p className="text-amber-100/70 pr-8">
                            Transforming spaces with premium flooring solutions since 1995.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map(({ Icon, href }, idx) => (
                                <a
                                    key={idx}
                                    href={href}
                                    className="w-10 h-10 rounded-full bg-[#2a2320] flex items-center justify-center
                                        hover:bg-amber-100 hover:text-[#0a0807] transition-colors duration-300"
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
                        <div className="grid grid-cols-1 gap-4">
                            {quickLinks.map(({ to, label }) => (
                                <Link
                                    key={label}
                                    to={to}
                                    className="text-amber-100/70 hover:text-amber-100 transition-colors"
                                >
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    {/* <div>
                        <h4 className="text-lg font-semibold mb-6">Our Services</h4>
                        <div className="grid grid-cols-1 gap-4">
                            {services.map(({ to, label }) => (
                                <Link
                                    key={label}
                                    to={to}
                                    className="text-amber-100/70 hover:text-amber-100 transition-colors"
                                >
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div> */}

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
                        <div className="space-y-4">
                            {contactInfo.map(({ Icon, text }, idx) => (
                                <div key={idx} className="flex items-center gap-3 text-amber-100/70">
                                    <Icon size={20} />
                                    <span>{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-amber-100/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-amber-100/60 text-sm">
                            &copy; {currentYear} Company Name. All Rights Reserved.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;