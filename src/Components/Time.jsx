import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Time() {
  return (
    <section className="gap-24 py-16 px-6 lg:px-16 max-w-[1400px] mx-auto">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* Left side =========================== */}
        <div className="flex-1 items-start">
          <img
            className="w-full h-auto max-w-lg"
            src="Images/Group 17.png"
            alt=""
          />
        </div>

        {/* right side =========================== */}
        <div className="flex flex-col flex-1 gap-4">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold max-w-lg">
            Make more time for the work
          </h1>
          <p className="text-black text-lg">
            {<CheckCircleOutlineIcon className="text-green-400 me-1" />}
            <span>Many ways to use illustrations in design</span>{" "}
          </p>
          <p className="text-black text-lg">
            {<CheckCircleOutlineIcon className="text-green-400 me-1" />}
            <span>Simply explained with illustrations</span>{" "}
          </p>
          <p className="text-black text-lg">
            {<CheckCircleOutlineIcon className="text-green-400 me-1" />}
            <span>Make more time for the work</span>{" "}
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <button className="bg-[#5F62E226] hover:bg-indigo-500 hover:text-white text-[#5F62E2] font-semibold py-3 px-6 transition duration-300 rounded-lg">
              Learn More
              <ArrowForwardIcon sx={{ fontSize: 24 }} />
            </button>
          </div>
        </div>
      </div>

      {/* Section 2 ========================== */}
      <div className="flex flex-col lg:flex-row items-center justify-between mt-24">
        {/* Left side =========================== */}
        <div className="flex flex-col flex-1 gap-4">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold max-w-lg">
            Make more time for the work
          </h1>
          <p className="text-black text-lg">
            {<CheckCircleOutlineIcon className="text-green-400 me-1" />}
            <span>Many ways to use illustrations in design</span>{" "}
          </p>
          <p className="text-black text-lg">
            {<CheckCircleOutlineIcon className="text-green-400 me-1" />}
            <span>Simply explained with illustrations</span>{" "}
          </p>
          <p className="text-black text-lg">
            {<CheckCircleOutlineIcon className="text-green-400 me-1" />}
            <span>Make more time for the work</span>{" "}
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <button className="bg-[#5F62E226] hover:bg-indigo-500 hover:text-white text-[#5F62E2] font-semibold py-3 px-6 transition duration-300 rounded-lg">
              Learn More
              <ArrowForwardIcon sx={{ fontSize: 24 }} />
            </button>
          </div>
        </div>
         {/* Right side =========================== */}
        <div className="flex-1 items-start">
          <img
            className="w-full h-auto max-w-lg"
            src="Images/Group 22.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Time;
