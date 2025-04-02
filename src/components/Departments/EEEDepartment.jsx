import React from "react";

const EEEDepartment = () => {
  return (
    <div className=" bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-gray-800 text-white text-center py-6">
            <h2 className="text-4xl font-semibold">Electrical and Electronics Engineering</h2>
            <p className="text-lg mt-2">Empowering Innovation in Energy and Technology</p>
          </div>

          <div className="p-8 space-y-6">
            <p className="text-gray-700 text-lg">
              The Electrical and Electronics Engineering (EEE) department at Government Polytechnic College, Vanavasi, provides
              a thorough education in electrical systems, electronics, control systems, and energy management. Our curriculum is
              designed to prepare students for careers in the rapidly evolving field of electrical engineering.
            </p>

            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">Key Highlights:</h3>
              <ul className="list-disc ml-5 text-gray-700 mt-2">
                <li>Comprehensive learning in electrical systems, circuits, and power electronics.</li>
                <li>Hands-on experience in energy management and renewable energy technologies.</li>
                <li>Practical training in control systems, automation, and instrumentation.</li>
                <li>Research opportunities in power generation, distribution, and energy efficiency.</li>
                <li>Industry exposure through collaborations and internships with top electrical firms.</li>
              </ul>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">Career Opportunities:</h3>
              <p className="text-gray-700 mt-2">
                Graduates from the EEE department can pursue careers in:
              </p>
              <ul className="list-disc ml-5 text-gray-700 mt-2">
                <li>Electrical Engineer</li>
                <li>Power Systems Engineer</li>
                <li>Electronics Design Engineer</li>
                <li>Control Systems Engineer</li>
                <li>Renewable Energy Consultant</li>
                <li>Instrumentation Engineer</li>
              </ul>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">Facilities and Labs:</h3>
              <ul className="list-disc ml-5 text-gray-700 mt-2">
                <li>State-of-the-art labs for Electrical Machines, Power Systems, and Control Systems.</li>
                <li>Dedicated computer labs with simulation tools like MATLAB, ETAP, and AutoCAD Electrical.</li>
                <li>Advanced testing labs for PCB design, electronics, and instrumentation.</li>
                <li>Collaborations with power sector companies for industry-driven projects and internships.</li>
              </ul>
            </div>

            <div className="text-center mt-8">
              <a
                href="/departments/eee"
                className="inline-block px-8 py-3 bg-indigo-600 text-white font-semibold text-lg rounded-full hover:bg-indigo-700 transition duration-300"
              >
                Learn More About Electrical and Electronics Engineering
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EEEDepartment;
