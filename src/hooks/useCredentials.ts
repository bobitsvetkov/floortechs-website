import { useState, useEffect } from 'react';

interface Credentials {
  emailJsPublicKey?: string;
  emailJsServiceKey?: string;
  emailJsTemplateKey?: string;
  recaptchaSiteKey?: string;
  googleMapsApiKey?: string;
}

export const useCredentials = () => {
  const [credentials, setCredentials] = useState<Credentials | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCredentials = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_SERVER}/api/credentials`);
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        const data: Credentials = await res.json();

        const hasMissing = Object.values(data).some(v => !v);
        if (hasMissing) throw new Error('Missing one or more credentials from backend');

        setCredentials(data);
        setError(null);
      } catch (e: unknown) {
        console.error('Failed to fetch credentials:', e);
        setError(e instanceof Error ? e.message : 'Unknown error');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCredentials();
  }, []);

  return { credentials, isLoading, error };
};
