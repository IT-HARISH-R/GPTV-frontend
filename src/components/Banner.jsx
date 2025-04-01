import React from 'react';
import logo from '../assets/gpt_logo.png'; // Adjust the path to your logo image

const Banner = () => {
  return (
    <div className="bg-[#1c75c5] text-white p-6 flex items-center justify-center">
      <img src={logo} alt="Government Polytechnic College Logo" className="h-20 mr-4" />
      <h1 className="text-3xl font-bold">
        Government Polytechnic College <br />
        Vanavasi Salem
      </h1>
    </div>
  );
};

export default Banner;
