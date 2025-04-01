import React from "react";

const CivilDepartment = () => {
  return (
    <div className="container mx-auto px-6 py-12 bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gray-800 text-white text-center py-6">
          <h2 className="text-4xl font-semibold">Civil Engineering</h2>
          <p className="text-lg mt-2">Building the Future, One Structure at a Time</p>
        </div>

        <div className="p-8 space-y-6">
          <p className="text-gray-700 text-lg">
            The Civil Engineering department at Government Polytechnic College, Vanavasi, offers an extensive curriculum
            that equips students with the knowledge and skills to design, construct, and maintain critical infrastructure.
            Our program focuses on construction management, structural analysis, material science, transportation, water
            resources, and environmental engineering.
          </p>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Key Highlights:</h3>
            <ul className="list-disc ml-5 text-gray-700 mt-2">
              <li>Advanced learning in construction and infrastructure design.</li>
              <li>Hands-on experience through practical projects and lab sessions.</li>
              <li>Emphasis on sustainable development and green building technologies.</li>
              <li>Research opportunities in the fields of soil mechanics, hydraulics, and material science.</li>
              <li>Industry partnerships for real-world exposure and internships.</li>
            </ul>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Career Opportunities:</h3>
            <p className="text-gray-700 mt-2">
              Graduates from the Civil Engineering department can pursue careers in:
            </p>
            <ul className="list-disc ml-5 text-gray-700 mt-2">
              <li>Construction Project Manager</li>
              <li>Structural Engineer</li>
              <li>Civil Design Engineer</li>
              <li>Transportation Engineer</li>
              <li>Water Resources Engineer</li>
              <li>Urban Planning Consultant</li>
            </ul>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Facilities and Labs:</h3>
            <ul className="list-disc ml-5 text-gray-700 mt-2">
              <li>State-of-the-art laboratories in Surveying, Concrete Technology, and Structural Analysis.</li>
              <li>Dedicated computer labs with software like AutoCAD, STAAD Pro, and Revit for design and simulation.</li>
              <li>Well-equipped workshops for hands-on learning in construction practices.</li>
              <li>Collaborations with local construction companies for industry insights and projects.</li>
            </ul>
          </div>

          <div className="text-center mt-8">
            <a
              href="/departments/civil"
              className="inline-block px-8 py-3 bg-indigo-600 text-white font-semibold text-lg rounded-full hover:bg-indigo-700 transition duration-300"
            >
              Learn More About Civil Engineering
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CivilDepartment;
{/* <Route path="/departments/civil" component={CivilDepartment} />
<Route path="/departments/mechanical" component={MechanicalDepartment} />
<Route path="/departments/eee" component={EEEDepartment} />
<Route path="/departments/ece" component={ECEDepartment} />
<Route path="/departments/computer" component={ComputerDepartment} />
<Route path="/departments/general" component={GeneralDepartment} /> */}