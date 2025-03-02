import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'md' }) => {
  // Size mappings
  const sizes = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  };
  
  const spinnerSize = sizes[size];
  
  return (
    <div className="flex items-center justify-center h-64 w-full">
      <div className="relative">
        {/* Outer ring */}
        <div className={`${spinnerSize} rounded-full border-4 border-blue-200 animate-pulse`}></div>
        {/* Inner spinner */}
        <div className={`absolute top-0 left-0 ${spinnerSize} rounded-full border-t-4 border-blue-600 animate-spin`}></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;