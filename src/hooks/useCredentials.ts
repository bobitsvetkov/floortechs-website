import { useState, useEffect } from 'react';
import type { Credentials } from '../types/types';

export const useCredentials = () => {
    const [credentials, setCredentials] = useState<Credentials | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        try {
            const localCredentials: Credentials = {
                emailJsPublicKey: import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY,
                emailJsServiceKey: import.meta.env.VITE_EMAIL_JS_SERVICE_KEY,
                emailJsTemplateKey: import.meta.env.VITE_EMAIL_JS_TEMPLATE_KEY,
                recaptchaSiteKey: import.meta.env.VITE_RECAPTCHA_SITE_KEY,
                googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
            };

            const hasMissing = Object.values(localCredentials).some(v => !v);
            if (hasMissing) {
                throw new Error('Missing one or more environment variables');
            }
            setCredentials(localCredentials);
            setError(null);
        } catch (e) {
            console.error('Error loading credentials from env:', e);
            setError('Missing or invalid environment variables');
        } finally {
            setIsLoading(false);
        }
    }, []);

    return { credentials, isLoading, error };
};