import React from "react";
import { Link } from "react-router-dom";

const Departments = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold text-center mb-8 text-primary font-sans">Departments</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Civil Engineering Department */}
        <div className="department-card bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-center mb-4">Civil Engineering</h2>
          <p className="text-gray-700 mb-4">
            The Civil Engineering department at GP Vanavasi offers a comprehensive curriculum focusing on construction, infrastructure, and design.
          </p>
          <Link to="/departments/civil" className="text-indigo-600 hover:text-indigo-800">
            Learn More
          </Link>
        </div>

        {/* Mechanical Engineering Department */}
        <div className="department-card bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-center mb-4">Mechanical Engineering</h2>
          <p className="text-gray-700 mb-4">
            The Mechanical Engineering department provides deep insights into thermodynamics, mechanics, and manufacturing processes.
          </p>
          <Link to="/departments/mechanical" className="text-indigo-600 hover:text-indigo-800">
            Learn More
          </Link>
        </div>

        {/* Electrical and Electronics Engineering Department */}
        <div className="department-card bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-center mb-4">Electrical & Electronics Engineering</h2>
          <p className="text-gray-700 mb-4">
            The Electrical & Electronics Engineering department focuses on power systems, electrical circuits, and electronics technology.
          </p>
          <Link to="/departments/eee" className="text-indigo-600 hover:text-indigo-800">
            Learn More
          </Link>
        </div>

        {/* Electronics and Communication Engineering Department */}
        <div className="department-card bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-center mb-4">Electronics & Communication Engineering</h2>
          <p className="text-gray-700 mb-4">
            The ECE department focuses on the study of electronics, circuits, and communications technology, preparing students for a tech-driven future.
          </p>
          <Link to="/departments/ece" className="text-indigo-600 hover:text-indigo-800">
            Learn More
          </Link>
        </div>

        {/* Computer Engineering Department */}
        <div className="department-card bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-center mb-4">Computer Engineering</h2>
          <p className="text-gray-700 mb-4">
            The Computer Engineering department offers a robust curriculum focusing on software development, programming languages, and computer systems.
          </p>
          <Link to="/departments/computer" className="text-indigo-600 hover:text-indigo-800">
            Learn More
          </Link>
        </div>

        {/* General Engineering Department */}
        <div className="department-card bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-center mb-4">General Engineering</h2>
          <p className="text-gray-700 mb-4">
            The General Engineering department provides a well-rounded education in basic engineering principles, covering various aspects of different engineering fields.
          </p>
          <Link to="/departments/general" className="text-indigo-600 hover:text-indigo-800">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Departments;
