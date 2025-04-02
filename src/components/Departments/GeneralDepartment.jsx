import React from "react";
import { Link } from "react-router-dom";

const GeneralDepartment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-600 text-white flex items-center justify-center px-6">
      <div className="container mx-auto text-center py-16">
        <h2 className="text-5xl font-bold mb-4 text-indigo-400">General Department</h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Building Strong Foundations for Engineering. The General Department at Government Polytechnic College, Vanavasi, provides essential knowledge in Mathematics, Physics, Chemistry, and Communication Skills, forming the base for all engineering disciplines.
        </p>

        <div className="max-w-4xl mx-auto text-left space-y-10">
          <div>
            <h3 className="text-3xl font-semibold mb-3 text-indigo-300">Key Highlights:</h3>
            <ul className="list-disc ml-6 space-y-2 text-lg">
              <li>Strong emphasis on fundamental sciences and applied mathematics.</li>
              <li>Development of analytical and problem-solving skills.</li>
              <li>Enhancing communication and professional skills for engineers.</li>
              <li>Well-equipped laboratories for physics and chemistry experiments.</li>
              <li>Dedicated faculty for mentoring and academic guidance.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-3xl font-semibold mb-3 text-indigo-300">Core Subjects:</h3>
            <ul className="list-disc ml-6 space-y-2 text-lg">
              <li>Engineering Mathematics</li>
              <li>Engineering Physics</li>
              <li>Engineering Chemistry</li>
              <li>Professional Communication</li>
              <li>Environmental Science</li>
            </ul>
          </div>

          <div>
            <h3 className="text-3xl font-semibold mb-3 text-indigo-300">Facilities and Resources:</h3>
            <ul className="list-disc ml-6 space-y-2 text-lg">
              <li>Modern laboratories with advanced equipment.</li>
              <li>Digital learning resources and e-library access.</li>
              <li>Experienced faculty specializing in core subjects.</li>
              <li>Workshops and seminars for holistic development.</li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <Link
            href="/departments/general"
            className="px-8 py-4 bg-purple-600 font-semibold text-lg rounded-full hover:bg-yellow-400 transition duration-300 shadow-lg"
          >
            Learn More About General Department
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GeneralDepartment;



// import React from "react";

// const GeneralDepartment = () => {
//   return (
//     <div className="bg-gray-50">
//     <div className="container mx-auto px-6 py-12 bg-gray-50">
//       <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//         <div className="bg-gray-800 text-white text-center py-6">
//           <h2 className="text-4xl font-semibold">General Engineering</h2>
//           <p className="text-lg mt-2">Building a Strong Foundation for All Disciplines</p>
//         </div>

//         <div className="p-8 space-y-6">
//           <p className="text-gray-700 text-lg">
//             The General Engineering department at Government Polytechnic College, Vanavasi, provides students with a solid foundation in core engineering principles. The department emphasizes the development of problem-solving skills and analytical thinking that can be applied across various engineering fields.
//           </p>

//           <div className="bg-gray-100 p-6 rounded-lg shadow-md">
//             <h3 className="text-xl font-semibold text-gray-800">Key Highlights:</h3>
//             <ul className="list-disc ml-5 text-gray-700 mt-2">
//               <li>Comprehensive coursework covering foundational subjects like mathematics, physics, and mechanics.</li>
//               <li>Introduction to key engineering concepts, including design, analysis, and manufacturing.</li>
//               <li>Hands-on experience through practical workshops and lab sessions.</li>
//               <li>Focus on developing analytical thinking and problem-solving skills applicable to all engineering disciplines.</li>
//               <li>Exposure to various specializations in engineering through interdisciplinary projects.</li>
//             </ul>
//           </div>

//           <div className="bg-gray-100 p-6 rounded-lg shadow-md">
//             <h3 className="text-xl font-semibold text-gray-800">Career Opportunities:</h3>
//             <p className="text-gray-700 mt-2">
//               Graduates from the General Engineering department can pursue careers in:
//             </p>
//             <ul className="list-disc ml-5 text-gray-700 mt-2">
//               <li>Mechanical Engineer</li>
//               <li>Civil Engineer</li>
//               <li>Electrical Engineer</li>
//               <li>Design Engineer</li>
//               <li>Project Manager</li>
//               <li>Manufacturing Engineer</li>
//               <li>Research and Development (R&D) Engineer</li>
//             </ul>
//           </div>

//           <div className="bg-gray-100 p-6 rounded-lg shadow-md">
//             <h3 className="text-xl font-semibold text-gray-800">Facilities and Labs:</h3>
//             <ul className="list-disc ml-5 text-gray-700 mt-2">
//               <li>General purpose labs for practical training in mathematics, physics, and basic engineering principles.</li>
//               <li>Workshops for learning manufacturing processes, assembly, and material testing.</li>
//               <li>Computer labs for simulation and design practice using engineering software.</li>
//               <li>Collaborative interdisciplinary projects with other departments to enhance learning.</li>
//             </ul>
//           </div>

//           <div className="text-center mt-8">
//             <a
//               href="/departments/general"
//               className="inline-block px-8 py-3 bg-indigo-600 text-white font-semibold text-lg rounded-full hover:bg-indigo-700 transition duration-300"
//             >
//               Learn More About General Engineering
//             </a>
//           </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GeneralDepartment;
