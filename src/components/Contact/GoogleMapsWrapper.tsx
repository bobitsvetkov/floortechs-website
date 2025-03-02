import React from "react";
import { useCredentials } from "../../hooks/useCredentials";
import LoadingSpinner from "../LoadingSpinner";
import { LoadScript } from "@react-google-maps/api";
import { GOOGLE_MAPS_LIBRARIES } from "../../common/constants";
const GoogleMapsWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { credentials, isLoading, error } = useCredentials();
    
    if (isLoading) return <LoadingSpinner size="lg" />;
    if (error) return <div className="p-4 bg-red-100 text-red-700 rounded-md">Error loading map data</div>;
    
    if (!credentials) return <div className="p-4 bg-red-100 text-red-700 rounded-md">Error loading map data</div>;

    return (
      <LoadScript
        googleMapsApiKey={credentials.googleMapsApiKey} libraries={GOOGLE_MAPS_LIBRARIES}
      >
        {children}
      </LoadScript>
    );
  };

export default GoogleMapsWrapper;