import { memo, useState, useEffect, useCallback, useRef } from 'react';
import { GoogleMap, InfoWindow } from '@react-google-maps/api';

const mapContainerStyle = {
    height: '400px',
    width: '100%',
};

const center = {
    lat: 40.335183601418,
    lng: -75.94501798525825,
};

const MapComponent = memo(() => {
    const [showInfoWindow, setShowInfoWindow] = useState(false);
    const [map, setMap] = useState<google.maps.Map | null>(null);
    const markerRef = useRef<google.maps.Marker | null>(null);

    const onLoad = useCallback((map: google.maps.Map) => {
        setMap(map);
    }, []);

    useEffect(() => {
        if (!map) return;

        const loadMarker = async () => {
            try {
                // Clean up existing marker if any
                if (markerRef.current) {
                    markerRef.current.setMap(null);
                }

                const { Marker } = (await google.maps.importLibrary(
                    'marker'
                )) as google.maps.MarkerLibrary;

                const currentMarker = new Marker({
                    map,
                    position: center,
                    title: 'Premium Flooring Showroom',
                });

                markerRef.current = currentMarker;

                currentMarker.addListener('click', () => {
                    console.log('Marker clicked');
                    setShowInfoWindow(true);
                });
            } catch (error) {
                console.error('Error loading marker:', error);
            }
        };

        loadMarker();

        return () => {
            if (markerRef.current) {
                markerRef.current.setMap(null);
            }
        };
    }, [map]);

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
            {showInfoWindow && markerRef.current && (
                <InfoWindow
                    position={center}
                    onCloseClick={() => setShowInfoWindow(false)}
                >
                    <div
                        style={{
                            backgroundColor: '#ffffff',
                            color: '#1E3A8A',
                            padding: '8px',
                            minWidth: '200px',
                            borderRadius: '8px',
                            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)',
                        }}
                    >
                        <h3
                            style={{
                                fontSize: '1.125rem',
                                fontWeight: '700',
                                marginBottom: '4px',
                            }}
                        >
                            Floor Techs Location
                        </h3>
                        <p style={{ marginBottom: '4px' }}>
                            326 Penn Ave West Reading, Pennsylvania 19611
                        </p>
                        <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
                    </div>
                </InfoWindow>
            )}
        </GoogleMap>
    );
});

export default MapComponent;
