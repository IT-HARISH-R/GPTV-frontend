import React from "react";

const GeneralDepartment = () => {
  return (
    <div className="container mx-auto px-6 py-12 bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gray-800 text-white text-center py-6">
          <h2 className="text-4xl font-semibold">General Engineering</h2>
          <p className="text-lg mt-2">Building a Strong Foundation for All Disciplines</p>
        </div>

        <div className="p-8 space-y-6">
          <p className="text-gray-700 text-lg">
            The General Engineering department at Government Polytechnic College, Vanavasi, provides students with a solid foundation in core engineering principles. The department emphasizes the development of problem-solving skills and analytical thinking that can be applied across various engineering fields.
          </p>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Key Highlights:</h3>
            <ul className="list-disc ml-5 text-gray-700 mt-2">
              <li>Comprehensive coursework covering foundational subjects like mathematics, physics, and mechanics.</li>
              <li>Introduction to key engineering concepts, including design, analysis, and manufacturing.</li>
              <li>Hands-on experience through practical workshops and lab sessions.</li>
              <li>Focus on developing analytical thinking and problem-solving skills applicable to all engineering disciplines.</li>
              <li>Exposure to various specializations in engineering through interdisciplinary projects.</li>
            </ul>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Career Opportunities:</h3>
            <p className="text-gray-700 mt-2">
              Graduates from the General Engineering department can pursue careers in:
            </p>
            <ul className="list-disc ml-5 text-gray-700 mt-2">
              <li>Mechanical Engineer</li>
              <li>Civil Engineer</li>
              <li>Electrical Engineer</li>
              <li>Design Engineer</li>
              <li>Project Manager</li>
              <li>Manufacturing Engineer</li>
              <li>Research and Development (R&D) Engineer</li>
            </ul>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Facilities and Labs:</h3>
            <ul className="list-disc ml-5 text-gray-700 mt-2">
              <li>General purpose labs for practical training in mathematics, physics, and basic engineering principles.</li>
              <li>Workshops for learning manufacturing processes, assembly, and material testing.</li>
              <li>Computer labs for simulation and design practice using engineering software.</li>
              <li>Collaborative interdisciplinary projects with other departments to enhance learning.</li>
            </ul>
          </div>

          <div className="text-center mt-8">
            <a
              href="/departments/general"
              className="inline-block px-8 py-3 bg-indigo-600 text-white font-semibold text-lg rounded-full hover:bg-indigo-700 transition duration-300"
            >
              Learn More About General Engineering
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralDepartment;
