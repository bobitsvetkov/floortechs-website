import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail} from 'lucide-react';
import { useState, useCallback, memo } from 'react';
import emailjs from '@emailjs/browser';
import { useCredentials } from '../../hooks/useCredentials';

interface ContactInfo {
    icon: JSX.Element;
    text: string;
    href?: string;
}

declare global {
    interface Window {
        grecaptcha: {
            execute: (siteKey: string, options: { action: string }) => Promise<string>;
            ready: (callback: () => void) => void;
        };
    }
}

const CONTACT_INFO: ContactInfo[] = [
    { 
        icon: <MapPin className="w-6 h-6" />, 
        text: '326 Penn ave West Reading, Pennsylvania 19611',
    },
    { icon: <Clock className="w-6 h-6" />, text: 'Mon - Fri: 9:00 AM - 5:00 PM' },
    { 
        icon: <Phone className="w-6 h-6" />, 
        text: '610-573-9895',
    },
    { 
        icon: <Mail className="w-6 h-6" />, 
        text: 'ajaber@floor-techs.com',
    }
];

const ContactInfoItem = memo(({ info }: { info: ContactInfo }) => (
    <motion.div
        whileHover={{ scale: 1.03 }}
        className="flex items-center space-x-4 p-5 bg-gradient-to-br from-blue-50 to-white rounded-xl 
                   border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300"
    >
        <span className="text-blue-500 bg-blue-50 p-2 rounded-full">{info.icon}</span>
    </motion.div>
));

const Contact = () => {
    const { credentials } = useCredentials();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState<{ success?: string; error?: string }>({});

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSending(true);
        setStatus({});

        try {
            if (!window.grecaptcha || !credentials?.recaptchaSiteKey) {
                throw new Error('reCAPTCHA or credentials not loaded');
            }

            const token = await window.grecaptcha.execute(credentials.recaptchaSiteKey, {
                action: 'submit',
            });

            const verificationResponse = await fetch(`${import.meta.env.VITE_BACKEND_SERVER}/verify-captcha`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token }),
            });

            if (!verificationResponse.ok) {
                throw new Error('CAPTCHA verification request failed');
            }

            const verificationResult = await verificationResponse.json();

            if (!verificationResult.success) {
                throw new Error('CAPTCHA verification failed');
            }

            await emailjs.send(
                credentials.emailJsServiceKey || '',
                credentials.emailJsTemplateKey || '',
                formData,
                credentials.emailJsPublicKey || ''
            );

            setStatus({ success: 'Message sent successfully! We\'ll get back to you soon.' });
            setFormData({ name: '', email: '', phone: '', message: '' });
        } catch (error) {
            setStatus({ error: (error as Error).message || 'Failed to send message' });
            console.error('Form submission error:', error);
        } finally {
            setIsSending(false);
        }
    };

    return (
        <div className="pt-20 min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 py-24">
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-4">
                        Contact Floor-Techs
                    </h1>
                    <p className="text-blue-700/70 max-w-2xl mx-auto">
                        Have questions about our flooring solutions? Get in touch with our team for expert advice and support.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <form onSubmit={handleSubmit} className="bg-white shadow-lg backdrop-blur-lg p-8 rounded-2xl border border-blue-100">
                            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                                Get in Touch
                            </h2>
                            <div className="space-y-5">
                                {[
                                    { label: 'Name', type: 'text', name: 'name' },
                                    { label: 'Email', type: 'email', name: 'email' },
                                    { label: 'Phone', type: 'tel', name: 'phone' }
                                ].map((field) => (
                                    <motion.div
                                        key={field.label}
                                        whileHover={{ scale: 1.01 }}
                                        className="group"
                                    >
                                        <label className="block text-sm font-medium text-blue-600 mb-2">
                                            {field.label}
                                        </label>
                                        <input
                                            type={field.type}
                                            name={field.name}
                                            value={formData[field.name as keyof typeof formData]}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-blue-50/50 border border-blue-100 rounded-lg
                                                       text-blue-700 placeholder-blue-400 focus:border-blue-300 focus:ring-2
                                                       focus:ring-blue-300/20 transition-all duration-300"
                                            placeholder={`Enter your ${field.label.toLowerCase()}`}
                                            required={field.name !== 'phone'}
                                        />
                                    </motion.div>
                                ))}
                                <motion.div whileHover={{ scale: 1.01 }}>
                                    <label className="block text-sm font-medium text-blue-600 mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full px-4 py-3 bg-blue-50/50 border border-blue-100 rounded-lg
                                                   text-blue-700 placeholder-blue-400 focus:border-blue-300 focus:ring-2
                                                   focus:ring-blue-300/20 transition-all duration-300"
                                        placeholder="Tell us about your project or questions"
                                        required
                                    />
                                </motion.div>
                                <motion.button
                                    type="submit"
                                    disabled={isSending}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-4
                                               rounded-lg font-medium relative overflow-hidden group disabled:opacity-70"
                                >
                                    <span className="relative z-10">{isSending ? 'Sending...' : 'Send Message'}</span>
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600"
                                        initial={{ x: '100%' }}
                                        whileHover={{ x: 0 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.button>
                                {status.success && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="bg-green-50 text-green-600 p-3 rounded-lg border border-green-100 mt-4 text-center"
                                    >
                                        <p>{status.success}</p>
                                    </motion.div>
                                )}
                                {status.error && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="bg-red-50 text-red-600 p-3 rounded-lg border border-red-100 mt-4 text-center"
                                    >
                                        <p>{status.error}</p>
                                    </motion.div>
                                )}
                            </div>
                        </form>
                    </motion.div>

                    {/* Contact Info Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div>                            
                            {/* Contact Details */}
                            <div className="grid grid-cols-1 gap-4">
                                {CONTACT_INFO.map((info, idx) => (
                                    <ContactInfoItem key={idx} info={info} />
                                ))}
                            </div>
                        </div>

                        {/* CTA Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-gradient-to-br from-blue-600 to-blue-500 p-8 rounded-2xl text-white shadow-lg mt-6"
                        >
                            <h3 className="text-xl font-bold mb-2">Ready to transform your space?</h3>
                            <p className="mb-4 text-blue-100">
                                Visit us to explore our flooring options and speak with our experts in person.
                            </p>
                            <motion.a 
                                href="https://maps.google.com/?q=326+Penn+ave+West+Reading+Pennsylvania+19611"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-medium"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <MapPin className="w-5 h-5 mr-2" />
                                Get Directions
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;