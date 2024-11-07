import React, { useEffect, useState } from 'react';
import { AiFillClockCircle } from "react-icons/ai";
import { MdGridView, MdViewList } from "react-icons/md";
import SlidesList from '../components/SlidesList';
import jsonData from "../data.json";
const BlockInfo = () => {
  const [blocks, setBlocks] = useState(jsonData);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isGridView, setIsGridView] = useState(false);
  const [viewSlides, setViewSlides] = useState(null);
  const [progress, setProgress] = useState(0);

  const [selectedFilters, setSelectedFilters] = useState({
    Completed: false,
    "In Progress": false,
    "Polished Block": false,
    "Slides": false,
    "Cut Blocks": false,
  });

  const toggleFilterDropdown = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleFilterChange = (filter) => {
    setSelectedFilters(prev => ({ ...prev, [filter]: !prev[filter] }));
  };

  const toggleView = () => {
    setIsGridView(!isGridView);
  };

  const calculateProgress = () => {
    const completedBlocks = blocks.filter(block => block.status === "Completed").length;
    const totalBlocks = blocks.length;
    const progressPercentage = totalBlocks ? Math.round((completedBlocks / totalBlocks) * 100) : 0;
    setProgress(progressPercentage);
  };

  useEffect(() => {
    calculateProgress();
  }, [blocks]);

  const filteredBlocks = blocks.filter(block => {
    const matchesSearch = block.blockId.toString().toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = Object.keys(selectedFilters).some(filter =>
      selectedFilters[filter] && block.status === filter
    );
    return matchesSearch && (matchesFilter || Object.values(selectedFilters).every(val => !val));
  });

  const viewSlidesHandler = (blockId) => {
    setViewSlides(viewSlides === blockId ? null : blockId);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen flex flex-col">
      {/* Header with Title and Icons */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-4">
          <h2 className="text-3xl font-semibold text-blue-900">Input Clinical Block</h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search Block ID"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <svg
              className="absolute left-3 top-3 h-5 w-5 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zm-1.4-5.92a5 5 0 10-7.07 7.07 5 5 0 007.07-7.07z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={toggleFilterDropdown}
            className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 flex items-center space-x-2 focus:outline-none"
          >
            <span>Filters</span>
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 5a1 1 0 011-1h12a1 1 0 011 1v1a1 1 0 01-.293.707L13 10.414V15a1 1 0 01-.293.707l-3 3A1 1 0 018 18v-7.586L4.293 6.707A1 1 0 014 6V5z" />
            </svg>
          </button>
          {isFilterOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
              <div className="p-4">
                {Object.keys(selectedFilters).map((filter) => (
                  <div key={filter} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      checked={selectedFilters[filter]}
                      onChange={() => handleFilterChange(filter)}
                      className="mr-2 h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                    />
                    <label className="text-gray-700">{filter}</label>
                  </div>
                ))}
              </div>
            </div>
          )}
          <button onClick={toggleView} className="text-purple-600 p-2 rounded-md hover:bg-purple-200">
            {isGridView ? <MdViewList className="h-6 w-6" /> : <MdGridView className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div className="overflow-y-auto h-full bg-white rounded-lg shadow-md">
        {isGridView ? (
          <div className="grid grid-cols-3 gap-4 p-4">
            {filteredBlocks.map((block) => (
              <div key={block.id} className="p-4 border border-gray-200 rounded-md shadow-sm">
                <p className="text-lg font-medium text-blue-800">Block ID: {block.blockId}</p>
                <p>Status: <span className="font-semibold">{block.status}</span></p>
                <p>Category: {block.category}</p>
                <p>Created: {block.created}</p>
                <p>Slides Generated: {block.slides}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="overflow-y-auto max-h-96"> {/* Scrollable table */}
            <table className="min-w-full">
              <thead className="bg-blue-100 text-blue-800">
                <tr>
                  <th className="py-3 px-6 text-left">ASAP</th>
                  <th className="py-3 px-6 text-left">Status</th>
                  <th className="py-3 px-6 text-left">Block ID</th>
                  <th className="py-3 px-6 text-left">Other Information</th>
                  <th className="py-3 px-6 text-left">Category</th>
                  <th className="py-3 px-6 text-left">Created</th>
                  <th className="py-3 px-6 text-left">Slides Generated</th>
                </tr>
              </thead>
              <tbody>
                {filteredBlocks.length > 0 ? (
                  filteredBlocks.map((block) => (
                    <>
                      <tr key={block.id} className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="py-3 px-6">{block.asap ? <AiFillClockCircle className="text-gray-600" /> : '-'}</td>
                        <td className="py-3 px-6">{block.status}</td>
                        <td className="py-3 px-6">{block.blockId}</td>
                        <td className="py-3 px-6">{block.otherInfo}</td>
                        <td className="py-3 px-6">{block.category}</td>
                        <td className="py-3 px-6">{block.created}</td>
                        <td className="py-3 px-6">
                          <button disabled={block.slides.length === 0} className={`hover:underline ${block.slides.length > 0 ? "text-blue-600" : "text-gray-400"}`} onClick={() => viewSlidesHandler(block.id)}>
                            View Slides
                          </button>
                        </td>
                      </tr>
                      {viewSlides === block.id && (
                        <tr>
                          <td colSpan="7" className="py-3 px-6">
                            <div className="flex gap-5 overflow-x-auto">
                              {block.slides && block.slides.length > 0 ? (
                                <SlidesList slides={block.slides} />
                              ) : (
                                <h1 className="text-center text-gray-500">Data Not Available</h1>
                              )}
                            </div>
                          </td>
                        </tr>
                      )}
                    </>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="py-6 text-center text-gray-600">No Data Available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <footer className="w-full p-4 mt-12">
        <div className="bg-green-600 text-white p-4 text-center font-semibold">
          Total Block Progress {progress}%
        </div>
      </footer>


    </div>
  );
};

export default BlockInfo;
