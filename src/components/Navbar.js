import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { IoIosNotifications } from 'react-icons/io';
import { MdPowerSettingsNew } from 'react-icons/md';
import { TiPrinter } from 'react-icons/ti';
import ChartComponent from './Chart';

const Navbar = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isBlockInfoOpen, setIsBlockInfoOpen] = useState(false);

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  const toggleBlockInfo = () => {
    setIsBlockInfoOpen(!isBlockInfoOpen);
  };

  // Sample data for the chart and block details
  const chartData = [700, 800, 500, 400, 900, 300, 700, 800, 500, 400];
  const blockDetails = {
    loaded: "70/100",
    processed: "70/70",
    cleaned: "70/70",
    cutting: "70/70",
    polished: "70/70",
    generatedSlides: "70/70",
  };

  const closePanel = () => {
    setIsPanelOpen(false);
  };

  return (
    <div className="navbar bg-blue-900 text-white w-64 h-screen flex flex-col justify-between p-4">
      {/* Logo and Title */}
      <div className="mb-6 flex flex-col items-center">
        <img
          src="/image/logo_2.png"
          alt="Logo"
          className="w-[160px] h-[100px] object-contain mb-4"
        />
        <hr className="w-full h-[0.5px] bg-white" />
      </div>

      {/* Main Menu - Block Information */}
      <button
        onClick={toggleBlockInfo}
        className="w-full text-left py-2 px-4 mb-1 hover:bg-blue-800 font-semibold flex items-center justify-between"
      >
        <Link to="/dashboard" className="flex items-center">
          <i className="fas fa-info-circle mr-3"></i> {/* Icon */}
          Block Information
        </Link>
        <span>
          {isBlockInfoOpen ? (
            <i className="fas fa-chevron-up"></i>
          ) : (
            <i className="fas fa-chevron-down"></i>
          )}
        </span>
      </button>

      {/* Submenu Items */}
      {isBlockInfoOpen && (
        <div className="ml-6">
          <div className="flex items-center py-2 px-4 hover:bg-blue-800 rounded transition duration-200">
            <i className="fas fa-broom mr-3"></i> {/* Icon */}
            Block Cleaning
          </div>
          <div className="flex items-center py-2 px-4 hover:bg-blue-800 rounded">
            <i className="fas fa-cut mr-3"></i> {/* Icon */}
            Block Cutting
          </div>
          <div className="flex items-center py-2 px-4 hover:bg-blue-800 rounded">
            <i className="fas fa-burn mr-3"></i> {/* Icon */}
            Block Polishing
          </div>
        </div>
      )}

      {/* Additional Menu Items */}
      <Link
        to="/dashboard/live-camera"
        className="flex items-center py-2 px-4 mt-4 hover:bg-blue-800 rounded justify-between transition duration-500 hover:scale-110"
      >
        <div className="flex items-center">
          <FontAwesomeIcon icon={faCameraRetro} className="mr-3" /> {/* Camera Icon */}
          Live Camera
        </div>
        {/* Notification Indicator with Number */}
        <div className="w-5 h-5 bg-purple-600 rounded-sm ml-2 flex items-center justify-center animate-pulse">
          <span className="text-white text-xs font-bold">3</span>
        </div>
      </Link>

      <Link
        to="/dashboard/consumables"
        className="flex items-center py-2 px-4 mt-4 hover:bg-blue-800 rounded justify-between transition duration-500 hover:scale-110"
      >
        <div className="flex items-center">
          <TiPrinter className="mr-3" />
          Consumables
        </div>
        <i className="fas fa-arrow-right"></i>
      </Link>

      {/* Additional Menu Items */}
      <Link
        to="/dashboard/notifications"
        className="flex items-center py-2 px-4 mt-4 hover:bg-blue-800 rounded justify-between transition duration-500 hover:scale-110"
      >
        <div className="flex items-center">
          <IoIosNotifications className="mr-3" />
          Notifications
        </div>
        {/* Notification Indicator with Number */}
        <div className="w-5 h-5 bg-purple-600 rounded-sm ml-2 flex items-center justify-center animate-pulse">
          <span className="text-white text-xs font-bold">3</span>
        </div>
      </Link>

      {/* Turn Off Section with Dotted Border */}
      <div className="p-4 mt-4 flex justify-center">
        <button onClick={togglePanel} className="border-2 border-dotted border-pink-500 rounded-md p-4 flex flex-col items-center transition duration-500 hover:scale-110">
          <div className="text-pink-500 hover:text-pink-400 p-3 rounded-full bg-transparent shadow-[0_0_15px_rgba(219,39,119,0.7)] animate-pulse">
            <MdPowerSettingsNew size={30} />
          </div>
          <p className="text-pink-500 mt-2">Turn Off the System</p>
        </button>
      </div>

      {/* Sliding Panel */}
      <div
        className={`z-50 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transform transition-opacity duration-300 ease-in-out ${isPanelOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div className="bg-white text-blue-800 rounded-2xl shadow-lg p-8 flex flex-col items-center relative max-w-full max-h-full w-[90%] md:w-[80%] lg:w-[60%] xl:w-[50%] overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={closePanel}
            className="absolute top-4 right-4 text-red-600 font-bold text-xl"
          >
            X
          </button>

          {/* Power Icon Button */}
          <div className="flex flex-col items-center justify-center py-2 px-8 border-2 border-dashed border-gray-400 rounded-lg bg-white">

            <button
              onClick={togglePanel}
              className="text-white bg-purple-600 p-4 rounded-full mb-4 shadow-[0_0_15px_rgba(128,0,128,0.5)]"
            >
              <MdPowerSettingsNew size={50} />
            </button>

            {/* Heading */}
            <h1 className="text-xl font-bold text-gray-800 mb-2 text-center">
              Unload and Turn Off the System
            </h1>

            {/* Subtext */}
            <p className="text-gray-500 mb-3 text-center">
              Check the details of the Block processed
            </p>
          </div>

          {/* View Full Report Button */}
          <button className="p-2 px-6 mt-5 bg-purple-600 text-white rounded-md hover:bg-purple-500">
            View Full Report
          </button>

          <div className="flex w-full mt-6 justify-between flex-wrap">

            {/* Block Details Section */}
            <div className="w-full md:w-1/2 p-4 text-left">
              <h3 className="text-xl font-semibold mb-2">Block Details</h3>
              <ul className="text-blue-800 space-y-1">
                <li>Block Loaded: {blockDetails.loaded}</li>
                <li>Block Processed: {blockDetails.processed}</li>
                <li>Block Cleaned: {blockDetails.cleaned}</li>
                <li>Block Cutting: {blockDetails.cutting}</li>
                <li>Block Polished: {blockDetails.polished}</li>
                <li>Slides Generated: {blockDetails.generatedSlides}</li>
              </ul>
            </div>

            {/* Chart Section */}
            <div className="w-full md:w-1/2 p-4">
              <ChartComponent data={chartData} />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Navbar;


