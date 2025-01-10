import { useState, useEffect } from 'react';
import type { Credentials } from '../types/types';

export const useCredentials = () => {
    const [credentials, setCredentials] = useState<Credentials | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCredentials = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BACKEND_SERVER}/api/credentials`);
                if (!response.ok) {
                    throw new Error('Failed to fetch credentials');
                }
                const data = await response.json();
                setCredentials(data);
                setError(null);
            } catch (error) {
                console.error('Error fetching credentials:', error);
                setError('Failed to load credentials');
            } finally {
                setIsLoading(false);
            }
        };

        fetchCredentials();
    }, []);

    return { credentials, isLoading, error };
};
