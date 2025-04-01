import React from 'react';
import logo from '../assets/gpt_logo.png'; // Adjust the path to your logo image

const Banner = () => {
  return (
    <div className="bg-[#1c75c5] text-white p-6 flex flex-col sm:flex-row items-center justify-center sm:space-x-6">
      <img
        src={logo}
        alt="Government Polytechnic College Logo"
        className="h-20 sm:h-24 mb-4 sm:mb-0 sm:mr-4 rounded-full"
      />
      <div className="text-center sm:text-left">
        <h1 className="text-2xl sm:text-3xl font-bold leading-tight sm:leading-normal">
          Government Polytechnic College <br />
          Vanavasi Salem
        </h1>
      </div>
    </div>
  );
};

export default Banner;
