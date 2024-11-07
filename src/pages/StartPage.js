import React from 'react';
import { useNavigate } from 'react-router-dom';

const StartPage = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/loading');
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Left Side with Image */}
      <div className="w-1/2 flex items-center justify-center bg-gray-100">
        <img src="/image/side_image.png" alt="Clinical setup" className="w-full h-full object-cover"
          style={{
            Width: '703px',
            Height: '768px',
          }} />
      </div>

      {/* Right Side with Instructions */}
      <div className="w-1/2 flex items-center justify-center">
        <div className="text-center px-8">
          <img src="/image/ideogram.png" alt="Logo" className="mx-auto mb-8" style={{
            Width: '456px',
            Height: '294px',
            objectFit: 'contain',
            Top: '59px',
            Left: '103px'
          }} />
          {/* Instruction Text */}
          <p className="text-lg font-medium text-blue-600 mb-6">Load the Clinical Block in the Machine</p>

          {/* Start Button */}
          <button
            onClick={handleStart}
            className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition"
          >
            Start The Machine
          </button>

          {/* Footer Note */}
          <p className="text-xs text-gray-500 mt-8">
            Clean the slides and the inside of the machine to get better results
          </p>
        </div>
      </div>
    </div>
  );
};

export default StartPage;










