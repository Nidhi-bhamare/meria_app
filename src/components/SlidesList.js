import { useState } from "react";
import ExpandedImageModal from "../pages/ExpandedImageModal";

const SlidesList = (props) => {
    const [slides, setSlides] = useState(props.slides);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);

    // Function to handle opening the modal
    const openModal = (index) => {
        console.log("click")
        setCurrentIndex(index);
        setIsModalOpen(true);
    };

    // Function to handle closing the modal
    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentIndex(null);
    };

    return (
        <div className="flex gap-5 overflow-x-auto flex-nowrap">
            {slides.length > 0 ? (
                slides.map((slide, index) => (
                    <div
                        key={index}
                        className="w-40 h-40 border border-gray-300 rounded-md overflow-hidden shadow-lg cursor-pointer"
                        onClick={() => openModal(index)}
                    >
                        <img src={slide.imgUrl} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                ))
            ) : (
                <h1 className="text-center text-gray-500">Data Not Available</h1>
            )}

            {/* Render ExpandedImageModal conditionally */}
            {isModalOpen && currentIndex !== null && (
                <ExpandedImageModal
                    slides={slides}
                    currentIndex={currentIndex}
                    onRequestClose={closeModal}
                />
            )}
        </div>
    );
};

export default SlidesList;

