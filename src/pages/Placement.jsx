import React from "react";
import Footer from "../components/Footer";

const Placement = () => {
  return (
    <div className="bg-gradient-to-br from-gray-200 to-blue-300 min-h-screen flex flex-col">
      <div className="container mx-auto px-6 sm:px-12 py-12 flex-grow">
        <div className="text-center text-blue-900">
          <h2 className="text-4xl sm:text-5xl font-extrabold">  <span className="text-primary">Placement</span> Opportunities</h2>
          <p className="text-lg sm:text-xl mt-3 italic text-blue-700">Empowering Students for a Successful Future</p>
        </div>

        <div data-aos="fade-up" className="mt-10 space-y-10">
          <p className="text-gray-800 text-center text-lg sm:text-xl leading-relaxed">
            The Placement Cell at Government Polytechnic College, Vanavasi, connects students with industry leaders through training, mentorship, and recruitment programs.
          </p>

          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-blue-900">
              <span className="text-primary">Key</span> Features
            </h3>
            <ul className="list-disc ml-6 mt-4 text-gray-800 text-lg space-y-2">
              <li>Industry collaborations and internships.</li>
              <li>Soft skills training and resume workshops.</li>
              <li>On-campus recruitment drives.</li>
              <li>One-on-one career counseling.</li>
            </ul>
          </div>

          <div data-aos="fade-up" className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-blue-900">
              <span className="text-primary">Top</span> Hiring Companies
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-6">
              {[ 
                { name: "Wipro", logo: "https://www.wipro.com/content/dam/wipro/social-icons/wipro_new_logo.svg" },
                { name: "Infosys", logo: "https://tse3.mm.bing.net/th?id=OIP.T0QTMVmw1gjDzzU5k7yvxwHaHa&pid=Api&P=0&h=180" },
                { name: "TCS", logo: "https://www.tcs.com/favicon.ico" },
                { name: "Accenture", logo: "https://www.accenture.com/favicon.ico" },
                { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
                { name: "Cognizant", logo: "https://www.cognizant.com/favicon.ico" }
              ].map((company, index) => (
                <div key={index} className="flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105">
                  <img src={company.logo} alt={company.name} className="h-12 mb-2" loading="lazy" />
                  <p className="text-blue-900 font-semibold text-lg">{company.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div data-aos="fade-up" className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-blue-900">
              <span className="text-primary">Alumni</span> Success Stories
            </h3>
            <p className="text-gray-800 mt-4 text-lg">
              Our alumni have excelled in various fields, securing leadership roles and driving innovation, showcasing the impact of our placement programs.
            </p>
          </div>

          <div data-aos="fade-up" className="text-center mt-6">
            <a
              href="/placement"
              className="inline-block px-8 py-3 bg-blue-800 text-white font-semibold text-lg rounded-full hover:bg-blue-900 transition duration-300 shadow-md transform hover:scale-105"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Placement;




