import { UploadIcon } from '@heroicons/react/solid';
import React from 'react';
import ChartComponent from "../components/Chart";

const chartData = [700, 800, 500, 400, 900, 300, 700, 800, 500, 400];

const Consumables = () => {
  return (
    // Outer container with fixed height and scroll
    <div className="p-6 bg-gray-50 h-screen overflow-y-auto">
      <div className="space-y-8">

        {/* Upload Invoice Section */}
        <div className="bg-orange-100 border border-orange-300 p-4 rounded-lg flex items-center justify-between space-x-4">
          <div className="flex items-center space-x-3">
            <UploadIcon className="w-6 h-6 text-orange-600" />
            <div>
              <h2 className="text-orange-800 font-semibold text-lg">Upload Your Invoice</h2>
              <p className="text-orange-600 text-sm">
                The process is completed for all the blocks, below you can view the report.
              </p>
            </div>
          </div>
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-lg">
            Upload
          </button>
        </div>

        <div className="flex space-x-6">
          {/* Inventory or Consumables Section */}
          <div className="bg-white p-6 rounded-lg shadow-md w-1/2 space-y-4">
            <h2 className="text-gray-800 font-semibold text-lg">Inventory or Consumables</h2>
            <p className="text-gray-600"><span className="font-bold">Total Blocks:</span> 100</p>
            <p><span className="font-bold text-green-500">50</span> Blocks are Done</p>
            <p><span className="font-bold text-yellow-500">20</span> Blocks Generated</p>
            <p><span className="font-bold text-red-500">30</span> Blocks Unavailable</p>
          </div>

          {/* Insights Section */}
          <div className="bg-white p-6 rounded-lg shadow-md w-1/2 space-y-4">
            <h3 className="text-gray-800 font-semibold text-lg">Insights</h3>
            <ul className="text-sm text-gray-600 list-disc list-inside space-y-2">
              <li>35 Blocks Took Extra Time to Process</li>
              <li>5 Devices need Maintenance</li>
              <li>High demand on secondary load valley on Nov 10th</li>
            </ul>
          </div>
        </div>

        {/* Block Processed Data (Chart) */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-gray-800 font-semibold text-lg mb-4">Block Processed Data</h2>
          <ChartComponent data={chartData} />
        </div>

        <div className="flex space-x-6">
          {/* Device Information Section */}
          <div className="bg-white p-6 rounded-lg shadow-md w-1/2 h-64 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-gray-800 font-semibold text-lg">Device Information</h2>
              <a href="#view-all" className="text-sm text-blue-600 hover:underline">View All</a>
            </div>

            <div className="flex space-x-6">
              {/* Device Image Container */}
              <div className="w-full h-full rounded-lg overflow-hidden flex items-center justify-center bg-gray-100">
                <img src="/image/Screenshot (221).png" alt="Device" className="w-full h-full object-contain" />
              </div>
            </div>

            {/* Warning Message */}
            <p className="text-red-500 text-sm mt-4">Warning: If the device is not working properly, contact support immediately.</p>
          </div>

          {/* Additional Information Container */}
          <div className="bg-white p-6 rounded-lg shadow-md w-1/2 h-64 border-dotted border-2 border-gray-400 flex items-center justify-center text-gray-600">
            <p className="text-center">Additional Information If Required</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consumables;
