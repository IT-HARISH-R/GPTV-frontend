import React from "react";
import { Link } from "react-router-dom";

const ECEDepartment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-700 text-white flex items-center justify-center px-6">
      <div className="container mx-auto text-center py-16">
        <h2 className="text-5xl font-bold mb-4 text-purple-400">Electronics and Communication Engineering</h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Connecting the World through Innovation. The Electronics and Communication Engineering department at Government Polytechnic College, Vanavasi, equips students with the latest advancements in communication systems, embedded technologies, and digital signal processing.
        </p>
        
        <div className="max-w-4xl mx-auto text-left space-y-10">
          <div>
            <h3 className="text-3xl font-semibold mb-3 text-purple-300">Key Highlights:</h3>
            <ul className="list-disc ml-6 space-y-2 text-lg">
              <li>Advanced learning in wireless communication and networking.</li>
              <li>Hands-on experience with microcontrollers, VLSI, and embedded systems.</li>
              <li>Focus on IoT, AI-based automation, and digital signal processing.</li>
              <li>Opportunities for research in robotics, satellite communication, and fiber optics.</li>
              <li>Industry collaborations for real-world exposure and internships.</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-3xl font-semibold mb-3 text-purple-300">Career Opportunities:</h3>
            <ul className="list-disc ml-6 space-y-2 text-lg">
              <li>Communication Network Engineer</li>
              <li>Embedded Systems Developer</li>
              <li>VLSI Design Engineer</li>
              <li>IoT Solutions Architect</li>
              <li>Robotics and Automation Engineer</li>
              <li>Wireless Communication Specialist</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-3xl font-semibold mb-3 text-purple-300">Facilities and Labs:</h3>
            <ul className="list-disc ml-6 space-y-2 text-lg">
              <li>State-of-the-art laboratories for digital electronics, microprocessors, and communication systems.</li>
              <li>Advanced VLSI and FPGA labs for real-time design and simulation.</li>
              <li>High-end research in embedded systems and IoT technologies.</li>
              <li>Collaboration with tech industries for projects and internships.</li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          {/* <a
            href="/departments/ece"
            className="px-8 py-4 bg-pink-500 text-gray-900 font-semibold text-lg rounded-full hover:bg-pink-400 transition duration-300 shadow-lg"
          >
            Learn More About Electronics & Communication Engineering
          </a> */}
          <Link
            href="/departments/ece"
            className="px-8 py-4 bg-purple-600 font-semibold text-lg rounded-full hover:bg-yellow-400 transition duration-300 shadow-lg"
          >
            Learn More About Electronics & Communication Engineering
            </Link>
        </div>
      </div>
    </div>
  );
};

export default ECEDepartment;

















// import React from "react";

// const ECEDepartment = () => {
//   return (
//     <div className=" bg-gray-50">
//       <div className="container mx-auto px-6 py-12">
//         <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//           <div className="bg-gray-800 text-white text-center py-6">
//             <h2 className="text-4xl font-semibold">Electronics and Communication Engineering</h2>
//             <p className="text-lg mt-2">Shaping the Future of Communication and Electronics</p>
//           </div>

//           <div className="p-8 space-y-6">
//             <p className="text-gray-700 text-lg">
//               The Electronics and Communication Engineering (ECE) department at Government Polytechnic College, Vanavasi, offers
//               a dynamic curriculum that integrates both electronics and communication technologies. Students in this department
//               gain comprehensive knowledge in areas such as circuit design, telecommunications, embedded systems, and signal processing.
//             </p>

//             <div className="bg-gray-100 p-6 rounded-lg shadow-md">
//               <h3 className="text-xl font-semibold text-gray-800">Key Highlights:</h3>
//               <ul className="list-disc ml-5 text-gray-700 mt-2">
//                 <li>Extensive learning in electronics, digital systems, and telecommunication.</li>
//                 <li>Hands-on experience with embedded systems and microcontroller programming.</li>
//                 <li>Research opportunities in communication systems, signal processing, and wireless technologies.</li>
//                 <li>Exposure to the latest trends in IoT (Internet of Things) and VLSI (Very-Large-Scale Integration).</li>
//                 <li>Internship and collaboration opportunities with leading electronics and communication companies.</li>
//               </ul>
//             </div>

//             <div className="bg-gray-100 p-6 rounded-lg shadow-md">
//               <h3 className="text-xl font-semibold text-gray-800">Career Opportunities:</h3>
//               <p className="text-gray-700 mt-2">
//                 Graduates from the ECE department can pursue careers in:
//               </p>
//               <ul className="list-disc ml-5 text-gray-700 mt-2">
//                 <li>Electronics Engineer</li>
//                 <li>Telecommunications Engineer</li>
//                 <li>Embedded Systems Engineer</li>
//                 <li>Signal Processing Engineer</li>
//                 <li>Network Engineer</li>
//                 <li>Communication Systems Engineer</li>
//                 <li>IoT Engineer</li>
//               </ul>
//             </div>

//             <div className="bg-gray-100 p-6 rounded-lg shadow-md">
//               <h3 className="text-xl font-semibold text-gray-800">Facilities and Labs:</h3>
//               <ul className="list-disc ml-5 text-gray-700 mt-2">
//                 <li>State-of-the-art laboratories in Circuit Theory, Analog & Digital Electronics, and Communication Systems.</li>
//                 <li>Dedicated labs for embedded systems, microcontroller programming, and IoT development.</li>
//                 <li>Advanced research facilities in wireless communication and signal processing.</li>
//                 <li>Collaboration with telecommunications and electronics industries for live projects and internships.</li>
//               </ul>
//             </div>

//             <div className="text-center mt-8">
//               <a
//                 href="/departments/ece"
//                 className="inline-block px-8 py-3 bg-indigo-600 text-white font-semibold text-lg rounded-full hover:bg-indigo-700 transition duration-300"
//               >
//                 Learn More About Electronics and Communication Engineering
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ECEDepartment;
