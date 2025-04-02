import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Departments = () => {
  return (
    <div>
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12 font-serif uppercase tracking-wide">
          Our Departments
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Civil Engineering Department */}
          <div className="bg-white p-8 rounded-2xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl border-t-4 border-blue-500">
            <h2 className="text-2xl font-bold text-center mb-4 text-blue-600">Civil Engineering</h2>
            <p className="text-gray-600 mb-4 text-justify">
              The Civil Engineering department at GP Vanavasi offers a comprehensive curriculum focusing on construction, infrastructure, and design.
            </p>
            <Link to="/departments/civil" className="block text-center text-white font-semibold bg-blue-600 py-2 px-4 rounded-lg hover:bg-blue-700 transition">
              Learn More
            </Link>
          </div>

          {/* Mechanical Engineering Department */}
          <div className="bg-white p-8 rounded-2xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl border-t-4 border-red-500">
            <h2 className="text-2xl font-bold text-center mb-4 text-red-600">Mechanical Engineering</h2>
            <p className="text-gray-600 mb-4 text-justify">
              The Mechanical Engineering department provides deep insights into thermodynamics, mechanics, and manufacturing processes.
            </p>
            <Link to="/departments/mechanical" className="block text-center text-white font-semibold bg-red-600 py-2 px-4 rounded-lg hover:bg-red-700 transition">
              Learn More
            </Link>
          </div>

          {/* Electrical and Electronics Engineering Department */}
          <div className="bg-white p-8 rounded-2xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl border-t-4 border-yellow-500">
            <h2 className="text-2xl font-bold text-center mb-4 text-yellow-600">Electrical & Electronics Engineering</h2>
            <p className="text-gray-600 mb-4 text-justify">
              The Electrical & Electronics Engineering department focuses on power systems, electrical circuits, and electronics technology.
            </p>
            <Link to="/departments/eee" className="block text-center text-white font-semibold bg-yellow-600 py-2 px-4 rounded-lg hover:bg-yellow-700 transition">
              Learn More
            </Link>
          </div>

          {/* Electronics and Communication Engineering Department */}
          <div className="bg-white p-8 rounded-2xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl border-t-4 border-purple-500">
            <h2 className="text-2xl font-bold text-center mb-4 text-purple-600">Electronics & Communication Engineering</h2>
            <p className="text-gray-600 mb-4 text-justify">
              The ECE department focuses on the study of electronics, circuits, and communications technology, preparing students for a tech-driven future.
            </p>
            <Link to="/departments/ece" className="block text-center text-white font-semibold bg-purple-600 py-2 px-4 rounded-lg hover:bg-purple-700 transition">
              Learn More
            </Link>
          </div>

          {/* Computer Engineering Department */}
          <div className="bg-white p-8 rounded-2xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl border-t-4 border-green-500">
            <h2 className="text-2xl font-bold text-center mb-4 text-green-600">Computer Engineering</h2>
            <p className="text-gray-600 mb-4 text-justify">
              The Computer Engineering department offers a robust curriculum focusing on software development, programming languages, and computer systems.
            </p>
            <Link to="/departments/computer" className="block text-center text-white font-semibold bg-green-600 py-2 px-4 rounded-lg hover:bg-green-700 transition">
              Learn More
            </Link>
          </div>

          {/* General Engineering Department */}
          <div className="bg-white p-8 rounded-2xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl border-t-4 border-indigo-500">
            <h2 className="text-2xl font-bold text-center mb-4 text-indigo-600">General Engineering</h2>
            <p className="text-gray-600 mb-4 text-justify">
              The General Engineering department provides a well-rounded education in basic engineering principles, covering various aspects of different engineering fields.
            </p>
            <Link to="/departments/general" className="block text-center text-white font-semibold bg-indigo-600 py-2 px-4 rounded-lg hover:bg-indigo-700 transition">
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Departments;