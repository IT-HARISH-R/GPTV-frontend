import React from "react";
import { Link } from "react-router-dom";

const MechanicalDepartment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-700 text-white flex items-center justify-center px-6">
      <div className="container mx-auto text-center py-16">
        <h2 className="text-5xl font-bold mb-4 text-red-600">Mechanical Engineering</h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Innovating the World of Machines. The Mechanical Engineering department at Government Polytechnic College, Vanavasi, provides a robust foundation in design, manufacturing, and thermal sciences, preparing students for dynamic engineering careers.
        </p>
        
        <div className="max-w-4xl mx-auto text-left space-y-10">
          <div>
            <h3 className="text-3xl font-semibold mb-3 text-red-600">Key Highlights:</h3>
            <ul className="list-disc ml-6 space-y-2 text-lg">
              <li>Comprehensive training in mechanical design and manufacturing.</li>
              <li>Hands-on experience in thermodynamics, fluid mechanics, and robotics.</li>
              <li>Emphasis on automation, CAD/CAM, and Industry 4.0 technologies.</li>
              <li>Research opportunities in renewable energy and material science.</li>
              <li>Strong industry collaborations for practical learning and internships.</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-3xl font-semibold mb-3 text-red-600">Career Opportunities:</h3>
            <ul className="list-disc ml-6 space-y-2 text-lg">
              <li>Mechanical Design Engineer</li>
              <li>Manufacturing Engineer</li>
              <li>Automobile Engineer</li>
              <li>Robotics and Automation Engineer</li>
              <li>Energy Systems Engineer</li>
              <li>Aerospace Engineer</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-3xl font-semibold mb-3 text-red-600">Facilities and Labs:</h3>
            <ul className="list-disc ml-6 space-y-2 text-lg">
              <li>State-of-the-art workshops for machining, welding, and fabrication.</li>
              <li>Computer-aided design labs equipped with SolidWorks and AutoCAD.</li>
              <li>Advanced laboratories for thermal engineering and fluid mechanics.</li>
              <li>Collaborations with leading industries for real-world projects.</li>
            </ul>
          </div>
        </div>

        {/* <div className="mt-12">

          <Link
            href="/departments/mechanical"
            className="px-8 py-4 bg-red-600 font-semibold text-lg rounded-full hover:bg-yellow-400 transition duration-300 shadow-lg"
          >
          Learn More About Mechanical  Engineering
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default MechanicalDepartment;

