import { Card } from "@mui/material";
import React from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Presentation() {
  const CardData = [
    {
      Source: "Images/Group 31.png ",
      Heading: "Managment",
      Text: "Software platform for running your new internet business",
    },
    {
      Source: "Images/Group 32.png ",
      Heading: "Entertainment",
      Text: "Software platform for running your new internet business",
    },
    {
      Source: "Images/Group 33.png ",
      Heading: "Marketing",
      Text: "Software platform for running your new internet business",
    },
    {
      Source: "Images/floppy 1.png ",
      Heading: "References",
      Text: "Software platform for running your new internet business",
    },
  ];

  const SocialLinks = [
    {link:'Images/Group 9.png'},
    {link:'Images/Group 10.png'},
    {link:'Images/Group 11.png'},
  ]

  return (
    <section className="bg-gray-50">
      <div className="container flex flex-col lg:flex-row items-center gap-20 py-12 px-6 md:px-12 lg:px-16 max-w-[1400px]">
        {/* Left section============ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-1/2">
          {CardData.map((card, index) => (
            <div
              key={index}
              className="p-4 gap-4 bg-white rounded-xl hover:bg-gray-100 transition-all text-center"
            >
              <div className="flex items-center justify-center">
                <img src={card.Source} alt="" />
              </div>

              <div className="">
                <h3 className="text-black text-lg md:text-xl font-semibold">
                  {card.Heading}
                </h3>
                <p className="text-gray-400 text-sm md:text-base">
                  {" "}
                  {card.Text}{" "}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 ">
          <h1 className="text-black text-3xl md:text-4xl lg:text-5xl font-semibold max-w-md mx-auto lg:mx-0 lg:text-start">
            The quickest way to create modern presentation
          </h1>
          <p className="text-gray-400 max-w-md mx-auto lg:mx-0 text-sm md:text-base text-center lg:text-start">
            Best software platform for running an internet business. We build
            the most powerful and flexible tools for internet commerce.
          </p>
          <button className="bg-[#5F62E226] hover:bg-green-700 hover:text-white text-[#5F62E2] font-semibold py-3 px-6 transition duration-300 rounded-lg">
            Explore All
            <ArrowForwardIcon sx={{fontSize:24}} />
          </button>
          <p className="text-gray-500 !mt[85px]">Follow us</p>
          <div className="flex justify-center lg:justify-start gap-4 mt-6 items-center ">
            {
              SocialLinks.map((social)=>(
                <a href="" className="bg-[#C4C4C4] rounded-full p-3 hover:bg-gray-400 transition duration-300">
                  <img className="w-[30px] h-[30px]" src={social.link} alt=""/>
                </a>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
}

export default Presentation;
