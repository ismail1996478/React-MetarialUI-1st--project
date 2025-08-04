import React, { useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function Slider() {
  const slides = [
    {
      id: 1,
      heading: "Make more time for the work that matters most",
      decription: "Best software platform for running an internet business.",
      image: "Images/Group 35.png",
    },
    {
      id: 2,
      heading: "Build more time for the work that matters most",
      decription: "Best software platform for running an internet business.",
      image: "Images/Group 9.png",
    },
    {
      id: 3,
      heading: "Make more time for the work that matters most",
      decription: "Best software platform for running an internet business.",
      image: "Images/Group 31.png",
    },
  ];

  
  const [currentIndex, setCurrentIndex] = useState(0); 

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const { heading, decription, image } = slides[currentIndex];

  return (
    <section className="max-w-[1400px] py-24 px-6 md:px-12 mx-auto">
      <div className="flex flex-col justify-between md:flex-row items-center gap-20">
        {/* Left Side */}
        <div className="flex flex-col justify-between w-full md:w-1/2 space-y-6">
          <img className="w-16 mb-4 md:w-24" src="Images/degic 1.png" alt="logo" />
          <h1 className="text-2xl md:text-5xl font-bold text-black max-w-md">
            {heading}
          </h1>
          <p className="text-gray-400 max-w-sm text-[20px]">
            {decription}
          </p>
          <div className="flex items-center space-x-4 mt-4">
            <button
              onClick={prevSlide}
              className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition"
            >
              <ChevronLeftIcon className="text-black" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition"
            >
              
              <ChevronRightIcon className="text-black" />
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 flex justify-center">
         
          <img
            className="w-full md:w-[65%] object-cover"
            src={image}
            alt="Slide"
          />
        </div>
      </div>

      <div className="flex justify-center items-center mt-16">
        <img className="w-full object-cover" src="Images/Logos.png" alt="" />
      </div>
    </section>
  );
}

export default Slider;
