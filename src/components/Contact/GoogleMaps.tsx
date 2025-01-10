import { memo, useState, useEffect, useCallback, useRef } from 'react';
import { GoogleMap, InfoWindow } from '@react-google-maps/api';

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
    const markerRef = useRef<google.maps.marker.AdvancedMarkerElement | null>(null);

    const onLoad = useCallback((map: google.maps.Map) => {
        setMap(map);
    }, []);

    useEffect(() => {
        if (!map) return;

        let currentMarker: google.maps.marker.AdvancedMarkerElement | null = null;

        const loadMarker = async () => {
            try {
                // Clean up existing marker if any
                if (marker) {
                    marker.map = null;
                }

                const { AdvancedMarkerElement } = (await google.maps.importLibrary(
                    'marker'
                )) as google.maps.MarkerLibrary;

                currentMarker = new AdvancedMarkerElement({
                    map,
                    position: center,
                    title: 'Premium Flooring Showroom',
                });

                markerRef.current = currentMarker;

                currentMarker.addListener('click', () => {
                    console.log('Marker clicked');
                    setShowInfoWindow(true);
                });

                setMarker(currentMarker);
            } catch (error) {
                console.error('Error loading marker:', error);
            }
        };

        loadMarker();

        // Cleanup
        return () => {
            if (markerRef.current) {
                markerRef.current.map = null;
            }
        };
    }, [map, marker]);

    return (
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
                <InfoWindow
                    position={center}
                    onCloseClick={() => setShowInfoWindow(false)}
                >
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
    );
});

export default MapComponent;