import React from "react";
import { Link } from "react-router-dom";

const ComputerDepartment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-700 text-white flex items-center justify-center px-6">
      <div className="container mx-auto text-center py-16">
        <h2 className="text-5xl font-bold mb-4 text-green-400">Computer Engineering</h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Innovating the Future with Technology. The Computer Engineering department at Government Polytechnic College, Vanavasi, empowers students with in-depth knowledge of programming, software development, artificial intelligence, and cybersecurity.
        </p>
        
        <div className="max-w-4xl mx-auto text-left space-y-10">
          <div>
            <h3 className="text-3xl font-semibold mb-3 text-green-300">Key Highlights:</h3>
            <ul className="list-disc ml-6 space-y-2 text-lg">
              <li>Comprehensive learning in programming languages and software engineering.</li>
              <li>Hands-on experience with web development, AI, and cloud computing.</li>
              <li>Emphasis on cybersecurity, blockchain, and data science.</li>
              <li>Opportunities for research in machine learning and deep learning.</li>
              <li>Industry tie-ups for internships and real-world project exposure.</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-3xl font-semibold mb-3 text-green-300">Career Opportunities:</h3>
            <ul className="list-disc ml-6 space-y-2 text-lg">
              <li>Software Developer</li>
              <li>Data Scientist</li>
              <li>Cybersecurity Analyst</li>
              <li>Cloud Solutions Architect</li>
              <li>AI/ML Engineer</li>
              <li>Full Stack Developer</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-3xl font-semibold mb-3 text-green-300">Facilities and Labs:</h3>
            <ul className="list-disc ml-6 space-y-2 text-lg">
              <li>High-performance computer labs with the latest hardware and software.</li>
              <li>Dedicated AI and data science research labs.</li>
              <li>Cloud computing and networking laboratories for practical training.</li>
              <li>Industry collaborations for hands-on experience and internships.</li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <Link
            href="/departments/computer"
            className="px-8 py-4 bg-green-600 font-semibold text-lg rounded-full hover:bg-yellow-400 transition duration-300 shadow-lg"
          >
            Learn More About Computer Engineering
            </Link>
        </div>
      </div>
    </div>
  );
};

export default ComputerDepartment;






// import React from "react";

// const ComputerDepartment = () => {
//   return (
//     <div className="bg-gray-50">
//       <div className="container mx-auto px-6 py-12 bg-gray-50">
//         <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//           <div className="bg-gray-800 text-white text-center py-6">
//             <h2 className="text-4xl font-semibold">Computer Engineering</h2>
//             <p className="text-lg mt-2">Innovating the Digital World</p>
//           </div>

//           <div className="p-8 space-y-6">
//             <p className="text-gray-700 text-lg">
//               The Computer Engineering department at Government Polytechnic College, Vanavasi, provides students with a strong foundation in computer science and engineering principles. The department covers areas like programming, algorithms, software development, hardware design, and artificial intelligence.
//             </p>

//             <div className="bg-gray-100 p-6 rounded-lg shadow-md">
//               <h3 className="text-xl font-semibold text-gray-800">Key Highlights:</h3>
//               <ul className="list-disc ml-5 text-gray-700 mt-2">
//                 <li>Comprehensive curriculum covering programming, algorithms, and software engineering.</li>
//                 <li>Hands-on learning in computer hardware design, microprocessors, and system architecture.</li>
//                 <li>Focus on emerging technologies such as **Artificial Intelligence**, **Machine Learning**, and **Data Science**.</li>
//                 <li>Opportunities for research in software engineering, distributed systems, and cybersecurity.</li>
//                 <li>Collaborations with tech companies for internships and real-world exposure.</li>
//               </ul>
//             </div>

//             <div className="bg-gray-100 p-6 rounded-lg shadow-md">
//               <h3 className="text-xl font-semibold text-gray-800">Career Opportunities:</h3>
//               <p className="text-gray-700 mt-2">
//                 Graduates from the Computer Engineering department can pursue careers in:
//               </p>
//               <ul className="list-disc ml-5 text-gray-700 mt-2">
//                 <li>Software Developer</li>
//                 <li>System Architect</li>
//                 <li>Data Scientist</li>
//                 <li>Cybersecurity Analyst</li>
//                 <li>Machine Learning Engineer</li>
//                 <li>AI Researcher</li>
//                 <li>Network Engineer</li>
//               </ul>
//             </div>

//             <div className="bg-gray-100 p-6 rounded-lg shadow-md">
//               <h3 className="text-xl font-semibold text-gray-800">Facilities and Labs:</h3>
//               <ul className="list-disc ml-5 text-gray-700 mt-2">
//                 <li>Well-equipped computer labs with the latest programming tools and development environments.</li>
//                 <li>Advanced labs for hardware design, microcontroller programming, and networking.</li>
//                 <li>Research facilities for Artificial Intelligence, Machine Learning, and Data Science.</li>
//                 <li>Industry collaborations with major tech companies for practical insights and internships.</li>
//               </ul>
//             </div>

//             <div className="text-center mt-8">
//               <a
//                 href="/departments/computer"
//                 className="inline-block px-8 py-3 bg-indigo-600 text-white font-semibold text-lg rounded-full hover:bg-indigo-700 transition duration-300"
//               >
//                 Learn More About Computer Engineering
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ComputerDepartment;
