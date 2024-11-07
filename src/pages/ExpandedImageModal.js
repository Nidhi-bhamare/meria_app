import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ExpandedImageModal = ({ slides, currentIndex, onRequestClose }) => {
  // Initialize the currentSlide state with the initial currentIndex passed as a prop
  const [currentSlide, setCurrentSlide] = useState(currentIndex);

  // Handle the previous slide when the user clicks the 'Prev' button
  const handlePrev = () => {
    // If the current slide is the first (index 0), go to the last slide, else go to the previous one
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Handle the next slide when the user clicks the 'Next' button
  const handleNext = () => {
    // If the current slide is the last, go to the first slide, else go to the next one
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Handle a specific slide click when the user clicks on a particular slide
  const handleSlideClick = (index) => {
    setCurrentSlide(index); // Set the currentSlide to the clicked slide index
  };

  return (
    <Modal isOpen onRequestClose={onRequestClose} contentLabel="Expanded Image Modal"
      className="flex items-center justify-center h-full">
      <div className="bg-white rounded-lg shadow-xl w-auto p-6 relative overflow-hidden">
        {/* Close button */}
        <button onClick={onRequestClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          ✖
        </button>

        <div className="flex justify-around gap-5">
          {/* Image and navigation buttons */}
          <div className="flex items-center justify-center gap-4">
            <button onClick={handlePrev} className="text-2xl text-gray-400 hover:text-gray-600">
              &#x276E;
            </button>
            <img
              src={slides[currentSlide].imgUrl}
              // alt={Slide ${currentSlide + 1}}
              className="w-[400px] h-auto rounded-lg"
            />
            <button onClick={handleNext} className="text-2xl text-gray-400 hover:text-gray-600">
              &#x276F;
            </button>
          </div>

          <div>
            {/* Slide information */}
            <div className="mt-6 text-gray-700 text-center">
              <h3 className="text-lg font-semibold text-blue-500">Output Slide Info</h3>
              <p>Total Slide: {currentSlide + 1}</p>
              <p>Total Time Taken: 0.04 Sec</p>
              <p>Additional Information</p>
            </div>
            {/* Slide thumbnails */}
            <div className="grid grid-cols-2 gap-2 justify-center gap-2 mt-4 overflow-y">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`cursor-pointer w-16 h-16 border-2 rounded overflow-hidden ${index === currentSlide ? "border-blue-500" : "border-gray-300"
                    }`}
                  onClick={() => handleSlideClick(index)}
                >
                  <img
                    src={slide.imgUrl}
                    // alt={Thumbnail ${index + 1}}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ExpandedImageModal;


