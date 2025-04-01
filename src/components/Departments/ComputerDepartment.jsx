import React from "react";

const ComputerDepartment = () => {
  return (
    <div className="container mx-auto px-6 py-12 bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gray-800 text-white text-center py-6">
          <h2 className="text-4xl font-semibold">Computer Engineering</h2>
          <p className="text-lg mt-2">Innovating the Digital World</p>
        </div>

        <div className="p-8 space-y-6">
          <p className="text-gray-700 text-lg">
            The Computer Engineering department at Government Polytechnic College, Vanavasi, provides students with a strong foundation in computer science and engineering principles. The department covers areas like programming, algorithms, software development, hardware design, and artificial intelligence.
          </p>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Key Highlights:</h3>
            <ul className="list-disc ml-5 text-gray-700 mt-2">
              <li>Comprehensive curriculum covering programming, algorithms, and software engineering.</li>
              <li>Hands-on learning in computer hardware design, microprocessors, and system architecture.</li>
              <li>Focus on emerging technologies such as **Artificial Intelligence**, **Machine Learning**, and **Data Science**.</li>
              <li>Opportunities for research in software engineering, distributed systems, and cybersecurity.</li>
              <li>Collaborations with tech companies for internships and real-world exposure.</li>
            </ul>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Career Opportunities:</h3>
            <p className="text-gray-700 mt-2">
              Graduates from the Computer Engineering department can pursue careers in:
            </p>
            <ul className="list-disc ml-5 text-gray-700 mt-2">
              <li>Software Developer</li>
              <li>System Architect</li>
              <li>Data Scientist</li>
              <li>Cybersecurity Analyst</li>
              <li>Machine Learning Engineer</li>
              <li>AI Researcher</li>
              <li>Network Engineer</li>
            </ul>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Facilities and Labs:</h3>
            <ul className="list-disc ml-5 text-gray-700 mt-2">
              <li>Well-equipped computer labs with the latest programming tools and development environments.</li>
              <li>Advanced labs for hardware design, microcontroller programming, and networking.</li>
              <li>Research facilities for Artificial Intelligence, Machine Learning, and Data Science.</li>
              <li>Industry collaborations with major tech companies for practical insights and internships.</li>
            </ul>
          </div>

          <div className="text-center mt-8">
            <a
              href="/departments/computer"
              className="inline-block px-8 py-3 bg-indigo-600 text-white font-semibold text-lg rounded-full hover:bg-indigo-700 transition duration-300"
            >
              Learn More About Computer Engineering
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComputerDepartment;
