import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import { GoogleMap, InfoWindow } from '@react-google-maps/api';
import { useState, useEffect, useCallback, memo } from 'react';
import emailjs from '@emailjs/browser';

interface ContactInfo {
    icon: JSX.Element;
    text: string;
}

declare global {
    interface Window {
        grecaptcha: {
            execute: (siteKey: string, options: { action: string }) => Promise<string>;
            ready: (callback: () => void) => void;
        };
    }
}

const mapContainerStyle = {
    width: '100%',
    height: '400px',
} as const;

const center = {
    lat: 37.7749,
    lng: -122.4194,
} as const;

const CONTACT_INFO: ContactInfo[] = [
    { icon: <MapPin className="w-6 h-6" />, text: 'Sample Address' },
    { icon: <Clock className="w-6 h-6" />, text: 'Mon - Fri: 9:00 AM - 5:00 PM' },
    { icon: <Phone className="w-6 h-6" />, text: '99999999' },
    { icon: <Mail className="w-6 h-6" />, text: 'test@gmail.com' }
];

// Memoized components
const ContactInfoItem = memo(({ info }: { info: ContactInfo }) => (
    <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex items-center space-x-4 p-4 bg-amber-100/5 rounded-xl
        hover:bg-amber-100/10 transition-colors duration-300"
    >
        <span className="text-amber-200">{info.icon}</span>
        <span className="text-amber-100/80">{info.text}</span>
    </motion.div>
));

const MapComponent = memo(() => {
    const [showInfoWindow, setShowInfoWindow] = useState(false);
    const [map, setMap] = useState<google.maps.Map | null>(null);
    const [marker, setMarker] = useState<google.maps.marker.AdvancedMarkerElement | null>(null);

    const onLoad = useCallback((map: google.maps.Map) => {
        setMap(map);
    }, []);

    useEffect(() => {
        if (map && !marker) {
            const loadMarker = async () => {
                try {
                    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;
                    const newMarker = new AdvancedMarkerElement({
                        map,
                        position: center,
                        title: 'Premium Flooring Showroom'
                    });

                    newMarker.addListener('click', () => setShowInfoWindow(true));
                    setMarker(newMarker);
                } catch (error) {
                    console.error('Error loading marker:', error);
                }
            };
            loadMarker();
        }
    }, [map]);

    return (
        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={14}
            onLoad={onLoad}
            options={{
                mapId: "4195fbbb045eab41"
            }}
        >
            {showInfoWindow && (
                <InfoWindow
                    position={center}
                    onCloseClick={() => setShowInfoWindow(false)}
                >
                    <div>
                        <h3 className="text-lg font-bold">Premium Flooring Showroom</h3>
                        <p>123 Floor Street, Design District</p>
                        <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
                    </div>
                </InfoWindow>
            )}
        </GoogleMap>
    );
});

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState<{ success?: string; error?: string }>({});

    useEffect(() => {
        const loadRecaptcha = async () => {
            try {
                await window.grecaptcha?.ready(() => {
                    console.log('reCAPTCHA ready');
                });
            } catch (error) {
                console.error('reCAPTCHA loading error:', error);
            }
        };
        loadRecaptcha();
    }, []);

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
            if (!window.grecaptcha) {
                throw new Error('reCAPTCHA not loaded');
            }
            console.log("recaptcha site key", import.meta.env.VITE_RECAPTCHA_SITE_KEY || process.env.RECAPTCHA_SITE_KEY)

            const token = await window.grecaptcha.execute(
                import.meta.env.VITE_RECAPTCHA_SITE_KEY || process.env.RECAPTCHA_SITE_KEY,
                { action: 'submit' }
            );
            console.log('reCAPTCHA token:', token);
            const verificationResponse = await fetch('https://portfolio-backend-server.azurewebsites.net/verify-captcha', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token })
            });

            if (!verificationResponse.ok) {
                throw new Error('Verification request failed');
            }

            const verificationResult = await verificationResponse.json();

            if (!verificationResult.success) {
                throw new Error('CAPTCHA verification failed');
            }

            await emailjs.send(
                import.meta.env.VITE_EMAIL_JS_SERVICE_KEY || process.env.EMAIL_JS_SERVICE_KEY,
                import.meta.env.VITE_EMAIL_JS_TEMPLATE_KEY || process.env.EMAIL_JS_TEMPLATE_KEY,
                formData,
                import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY || process.env.EMAIL_JS_PUBLIC_KEY
            );

            setStatus({ success: 'Message sent successfully!' });
            setFormData({ name: '', email: '', phone: '', message: '' });
        } catch (error) {
            setStatus({ error: (error as Error).message || 'Failed to send message' });
            console.error('Form submission error:', error);
        } finally {
            setIsSending(false);
        }
    };

    return (
        <div className="pt-20 min-h-screen bg-[#1a1310]">
            <div className="max-w-7xl mx-auto px-4 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit} className="bg-amber-100/5 backdrop-blur-lg p-8 rounded-2xl border border-amber-100/10">
                            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-amber-200 to-amber-100 bg-clip-text text-transparent">
                                Get in Touch
                            </h2>
                            <div className="space-y-6">
                                {[
                                    { label: 'Name', type: 'text', name: 'name' },
                                    { label: 'Email', type: 'email', name: 'email' },
                                    { label: 'Phone', type: 'tel', name: 'phone' }
                                ].map((field) => (
                                    <motion.div
                                        key={field.label}
                                        whileHover={{ scale: 1.02 }}
                                        className="group"
                                    >
                                        <label className="block text-sm font-medium text-amber-100/80 mb-2">
                                            {field.label}
                                        </label>
                                        <input
                                            type={field.type}
                                            name={field.name}
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-amber-100/5 border border-amber-100/10 rounded-lg
                                            text-amber-100 placeholder-amber-100/30 focus:border-amber-200/50 focus:ring-2
                                            focus:ring-amber-200/20 transition-all duration-300"
                                            placeholder={`Enter your ${field.label.toLowerCase()}`}
                                            required={field.name !== 'phone'}
                                        />
                                    </motion.div>
                                ))}
                                <motion.div whileHover={{ scale: 1.02 }}>
                                    <label className="block text-sm font-medium text-amber-100/80 mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full px-4 py-3 bg-amber-100/5 border border-amber-100/10 rounded-lg
                                        text-amber-100 placeholder-amber-100/30 focus:border-amber-200/50 focus:ring-2
                                        focus:ring-amber-200/20 transition-all duration-300"
                                        placeholder="Tell us about your project"
                                        required
                                    />
                                </motion.div>
                                <motion.button
                                    type="submit"
                                    disabled={isSending}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-gradient-to-r from-amber-200 to-amber-100 text-[#1a1310] py-4
                                    rounded-lg font-medium relative overflow-hidden group disabled:opacity-70"
                                >
                                    <span className="relative z-10">{isSending ? 'Sending...' : 'Send Message'}</span>
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-amber-100 to-amber-200"
                                        initial={{ x: '100%' }}
                                        whileHover={{ x: 0 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.button>
                                {status.success && <p className="text-green-500 text-center mt-4">{status.success}</p>}
                                {status.error && <p className="text-red-500 text-center mt-4">{status.error}</p>}
                            </div>
                        </form>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-200 to-amber-100 bg-clip-text text-transparent">
                            Visit Our Showroom
                        </h2>
                        <div className="rounded-2xl overflow-hidden">
                            <MapComponent />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {CONTACT_INFO.map((info, idx) => (
                                <ContactInfoItem key={idx} info={info} />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;