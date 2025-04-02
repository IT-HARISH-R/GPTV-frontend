import React from "react";

const MechanicalDepartment = () => {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-gray-800 text-white text-center py-6">
            <h2 className="text-4xl font-semibold">Mechanical Engineering</h2>
            <p className="text-lg mt-2">Innovating for the Future of Technology</p>
          </div>

          <div className="p-8 space-y-6">
            <p className="text-gray-700 text-lg">
              The Mechanical Engineering department at Government Polytechnic College, Vanavasi, provides a comprehensive
              program focused on the design, development, and manufacturing of mechanical systems. Students explore
              thermodynamics, mechanics, material science, robotics, and manufacturing processes in both theory and practice.
            </p>

            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">Key Highlights:</h3>
              <ul className="list-disc ml-5 text-gray-700 mt-2">
                <li>Hands-on experience with robotics, automation, and CNC machining.</li>
                <li>Advanced courses in thermodynamics, fluid mechanics, and material science.</li>
                <li>Industry partnerships with leading mechanical engineering firms.</li>
                <li>Opportunities for students to participate in design and manufacturing competitions.</li>
                <li>State-of-the-art laboratories equipped with cutting-edge technology.</li>
              </ul>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">Career Opportunities:</h3>
              <p className="text-gray-700 mt-2">
                Graduates from the Mechanical Engineering department can pursue careers in:
              </p>
              <ul className="list-disc ml-5 text-gray-700 mt-2">
                <li>Mechanical Design Engineer</li>
                <li>Manufacturing Engineer</li>
                <li>Automation Engineer</li>
                <li>Thermal Systems Engineer</li>
                <li>Robotics Engineer</li>
                <li>Project Manager in Mechanical Engineering</li>
              </ul>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">Facilities and Labs:</h3>
              <ul className="list-disc ml-5 text-gray-700 mt-2">
                <li>Modern labs for Thermodynamics, Fluid Mechanics, and Manufacturing Technology.</li>
                <li>Computer labs equipped with simulation software like ANSYS, MATLAB, and SolidWorks.</li>
                <li>Workshops for hands-on learning with CNC machines, 3D printers, and robotic kits.</li>
                <li>Collaborations with mechanical industries for internships and projects.</li>
              </ul>
            </div>

            <div className="text-center mt-8">
              <a
                href="/departments/mechanical"
                className="inline-block px-8 py-3 bg-indigo-600 text-white font-semibold text-lg rounded-full hover:bg-indigo-700 transition duration-300"
              >
                Learn More About Mechanical Engineering
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MechanicalDepartment;
