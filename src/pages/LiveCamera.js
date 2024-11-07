import React, { useState } from "react";
import { FiMaximize, FiPlus, FiSettings, FiVideo, FiVolume2 } from "react-icons/fi";

const cameras = [
  {
    name: "Camera 2",
    src: "/video/4121322-uhd_3840_2160_25fps.mp4", // Video for Camera 2
    ipAddress: "24.132.12.031",
    firmwareVersion: "2.0.13",
    brand: "CadDX",
    model: "ANT-169",
  },
  {
    name: "Camera 3",
    src: "/video/4260415-uhd_3840_2160_25fps.mp4", // Video for Camera 3
    ipAddress: "24.132.12.032",
    firmwareVersion: "2.0.14",
    brand: "CadDX",
    model: "ANT-170",
  },
];

const LiveCamera = () => {
  const [camera, setCameras] = useState(cameras);
  const [selectedCamera, setSelectedCamera] = useState({
    src: "/video/4121322-uhd_3840_2160_25fps.mp4",
    ipAddress: "24.132.12.031",
    firmwareVersion: "2.0.13",
    name: "Camera 2",
    brand: "CadDX",
    model: "ANT-169",
  });

  // Handle camera click to change video and details
  const handleCameraClick = (camera) => {
    setSelectedCamera(camera);
  };

  return (
    <div className=" bg-gray-100 min-h-screen">
      {/* Page Header */}
      <h2 className="text-2xl font-bold text-blue-700 mb-6">Live Camera Feed</h2>

      {/* Main Content Section: Video + Sidebar */}
      <div className="flex space-x-6">
        {/* Video Section (Now on the Left) */}
        <div className="flex-1 bg-gray-200 p-4 rounded-lg relative">
          <video
            src={selectedCamera.src}  // Dynamically use the selected camera video
            alt="Main Camera Feed"
            className="w-full h-72 object-cover rounded-lg"
            autoPlay
            controls
            muted
          />
          <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
            Live
          </div>
          <div className="absolute bottom-2 left-2 flex space-x-4 text-white">
            <FiVideo className="text-xl cursor-pointer" />
            <FiVolume2 className="text-xl cursor-pointer" />
            <FiSettings className="text-xl cursor-pointer" />
            <FiMaximize className="text-xl cursor-pointer" />
          </div>
        </div>

        {/* Right Sidebar Box (Camera Details and Icon) */}
        <div className="bg-white w-60 p-4 rounded-lg shadow">
          {/* Camera Icon */}
          <div className="flex justify-center mb-4">
            <h3 className="text-lg font-semibold mb-2">{selectedCamera.name} Details</h3>
            <img
              src="/image/CADDX-ANT-169-SILVER-NANO-FPV-CAMERA-2 1.png" // Camera icon image
              alt="Camera Icon"
              className="w-24 h-24 object-cover rounded-lg"
            />
          </div>

          {/* Camera Brand and Model */}
          <p className="text-sm text-gray-600">Brand: {selectedCamera.brand}</p>
          <p className="text-sm text-gray-600">Model: {selectedCamera.model}</p>

          {/* Camera Information */}
          <p className="text-sm text-gray-600">IP Address: {selectedCamera.ipAddress}</p>
          <p className="text-sm text-gray-600">Firmware Version: {selectedCamera.firmwareVersion}</p>

          {/* Manage Device Button */}
          <button className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded transition duration-500 hover:scale-110">
            Manage the Device
          </button>
        </div>
      </div>

      {/* Bottom Section: Two Cameras and Add Camera Column */}
      <div className="mt-6">
        <div className="flex flex-wrap gap-5 ">
          {/* Column 1: Camera 2 */}
          {cameras.map((camera, index) => (
            <div
              key={index} // Adding a unique key for each item in the loop
              className="relative bg-white w-60 h-40 rounded-lg shadow overflow-hidden cursor-pointer transition duration-500 hover:scale-110"
              onClick={() => handleCameraClick(camera)}
            >
              <video
                src={camera.src} // Using the current camera's src
                className="w-full h-full object-cover"
                autoPlay={false}
                muted
                loop
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-white opacity-90"></div>
              <h3 className="text-sm font-semibold absolute top-2 left-2 text-white z-10">{camera.name}</h3>
            </div>
          ))}

          {/* Add Camera Option */}
          <div
            className="relative w-60 h-40 bg-gray-100 rounded-lg shadow flex flex-col items-center justify-center cursor-pointer hover:bg-gray-200 transition border-2 border-dashed border-gray-400"
          >
            <FiPlus className="text-5xl text-gray-500 mb-2" />
            <p className="text-base text-gray-600 font-medium">Add Camera</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveCamera;
