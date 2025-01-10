import { memo, useState, useEffect, useCallback } from 'react';
import { GoogleMap, InfoWindow, LoadScript, Libraries } from '@react-google-maps/api';
import { Credentials } from '../../types/types';
const GOOGLE_MAPS_LIBRARIES: Libraries = ['places', 'drawing', 'geometry', 'visualization'];

const mapContainerStyle = {
    height: '400px',
    width: '100%',
};

const center = {
    lat: 40.712776,
    lng: -74.005974,
};

const MapComponent = memo(() => {
    const [showInfoWindow, setShowInfoWindow] = useState(false);
    const [map, setMap] = useState<google.maps.Map | null>(null);
    const [marker, setMarker] = useState<google.maps.marker.AdvancedMarkerElement | null>(null);
    const [credentials, setCredentials] = useState<Credentials | null>(null);

    const onLoad = useCallback((map: google.maps.Map) => {
        setMap(map);
    }, []);

    useEffect(() => {
        const fetchCredentials = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BACKEND_SERVER}/api/credentials`);
                if (!response.ok) {
                    throw new Error('Failed to fetch credentials');
                }
                const data = await response.json();
                setCredentials(data);
            } catch (error) {
                console.error('Error fetching credentials:', error);
            }
        };

        fetchCredentials();
    }, []);

    useEffect(() => {
        let currentMarker: google.maps.marker.AdvancedMarkerElement | null = null;

        const loadMarker = async () => {
            if (!map || !credentials) return;

            try {
                if (marker) {
                    marker.map = null;
                    setMarker(null);
                }

                const { AdvancedMarkerElement } = (await google.maps.importLibrary(
                    'marker'
                )) as google.maps.MarkerLibrary;
                currentMarker = new AdvancedMarkerElement({
                    map,
                    position: center,
                    title: 'Premium Flooring Showroom',
                });

                currentMarker.addListener('click', () => setShowInfoWindow(true));
                setMarker(currentMarker);
            } catch (error) {
                console.error('Error loading marker:', error);
            }
        };

        loadMarker();

        return () => {
            if (currentMarker) {
                currentMarker.map = null;
            }
        };
    }, [map, credentials, marker]);

    if (!credentials) {
        return (
            <div className="flex items-center justify-center h-96">
                <div className="w-12 h-12 border-4 border-t-4 border-t-transparent border-gray-600 rounded-full animate-spin"></div>
            </div>
        );
    }

    const GOOGLE_MAPS_API_KEY = credentials.googleMapsApiKey;
    console.log(GOOGLE_MAPS_API_KEY)

    return (
        <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY} libraries={GOOGLE_MAPS_LIBRARIES}>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={14}
                onLoad={onLoad}
                options={{
                    mapId: import.meta.env.VITE_MAP_ID,
                }}
            >
                {showInfoWindow && marker && (
                    <InfoWindow position={center} onCloseClick={() => setShowInfoWindow(false)}>
                        <div
                            style={{
                                color: '#1a1310',
                                padding: '8px',
                                minWidth: '200px',
                            }}
                        >
                            <h3
                                style={{
                                    fontSize: '1.125rem',
                                    fontWeight: '700',
                                    marginBottom: '4px',
                                }}
                            >
                                Premium Flooring Showroom
                            </h3>
                            <p style={{ marginBottom: '4px' }}>123 Floor Street, Design District</p>
                            <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
                        </div>
                    </InfoWindow>
                )}
            </GoogleMap>
        </LoadScript>
    );
});

export default MapComponent;
