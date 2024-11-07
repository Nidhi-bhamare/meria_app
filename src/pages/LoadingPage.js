import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoadingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/dashboard');
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex h-screen bg-white">
      <div className="w-1/2 flex items-center justify-center bg-gray-100">
        <img src="/image/loding.png" alt="Clinical setup" className="w-full h-full object-cover" />
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center text-center px-8">
        <img src="/image/logo_2.png" alt="Logo" className="mx-auto mb-8" style={{
          Width: '150px',
          Height: '150px',
          objectFit: 'contain',
        }} />
        <div className="relative w-24 h-24 mb-6">
          <svg className="w-full h-full">
            <circle
              cx="50%"
              cy="50%"
              r="40%"
              stroke="#E5E7EB"
              strokeWidth="10"
              fill="none"
            />
            <circle
              cx="50%"
              cy="50%"
              r="40%"
              stroke="#8B5CF6"
              strokeWidth="10"
              fill="none"
              strokeDasharray="251.2"
              strokeDashoffset="27.6"
              transform="rotate(-90 50 50)"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-purple-600">89%</span>
        </div>

        {/* Description Text */}
        <p className="text-gray-600 mb-8 px-4">
          A seamless digital pathology workflow to empower pathologists and ease collaboration
        </p>

        {/* Pagination Indicator */}
        <div className="flex space-x-2">
          <span className="w-3 h-3 bg-purple-600 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        </div>

        {/* Footer Note */}
        <p className="text-xs text-gray-500 mt-8">
          Clean the slides and the inside of the machine to get better results
        </p>
      </div>
    </div>
  );
};

export default LoadingPage;
