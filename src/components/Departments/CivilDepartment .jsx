import React from "react";
import { Link } from "react-router-dom";

const CivilDepartment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-700 text-white flex items-center justify-center px-6">
      <div className="container mx-auto text-center py-16">
        <h2 className="text-5xl font-bold mb-4 text-blue-600">Civil Engineering</h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Building the Future, One Structure at a Time. The Civil Engineering department at Government Polytechnic College, Vanavasi, provides comprehensive training in infrastructure development, sustainable design, and construction management.
        </p>
        
        <div className="max-w-4xl mx-auto text-left space-y-10">
          <div>
            <h3 className="text-3xl font-semibold mb-3 text-blue-600">Key Highlights:</h3>
            <ul className="list-disc ml-6 space-y-2 text-lg">
              <li>Cutting-edge training in construction and infrastructure design.</li>
              <li>Practical projects and hands-on lab sessions.</li>
              <li>Focus on sustainable and green building technologies.</li>
              <li>Research opportunities in soil mechanics, hydraulics, and material science.</li>
              <li>Industry tie-ups for real-world exposure and internships.</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-3xl font-semibold mb-3 text-blue-600">Career Opportunities:</h3>
            <ul className="list-disc ml-6 space-y-2 text-lg">
              <li>Construction Project Manager</li>
              <li>Structural Engineer</li>
              <li>Civil Design Engineer</li>
              <li>Transportation Engineer</li>
              <li>Water Resources Engineer</li>
              <li>Urban Planning Consultant</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-3xl font-semibold mb-3 text-blue-600">Facilities and Labs:</h3>
            <ul className="list-disc ml-6 space-y-2 text-lg">
              <li>Advanced laboratories for Surveying, Concrete Technology, and Structural Analysis.</li>
              <li>Computer labs with AutoCAD, STAAD Pro, and Revit for design simulations.</li>
              <li>Hands-on training workshops in construction practices.</li>
              <li>Industry collaborations for project-based learning.</li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <Link
            href="/departments/civil"
            className="px-8 py-4 bg-blue-600 font-semibold text-lg rounded-full hover:bg-yellow-400 transition duration-300 shadow-lg"
          >
          Learn More About Civil Engineering
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CivilDepartment;