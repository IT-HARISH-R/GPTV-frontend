import React from "react";

const Placement = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-100 to-blue-50">
      <div className="container mx-auto px-6 py-12 ">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="bg-indigo-700 text-white text-center py-8">
            <h2 className="text-5xl font-semibold">Placement Opportunities</h2>
            <p className="text-xl mt-3 italic">Bridging Students to Industry Success</p>
          </div>

          <div className="p-10 space-y-6">
            <p className="text-gray-800 text-lg">
              Our Placement Cell at Government Polytechnic College, Vanavasi, is committed to providing our students with excellent career opportunities. We build strong industry relationships, offer skill development programs, and organize recruitment drives to place our students with the best companies.
            </p>

            <div className="bg-indigo-50 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-indigo-800">Key Features:</h3>
              <ul className="list-disc ml-6 text-gray-700 mt-2">
                <li>Continuous industry engagement to stay ahead of trends.</li>
                <li>Mock interviews, resume building, and soft skills enhancement.</li>
                <li>Placement drives by top companies across various industries.</li>
                <li>Personalized career guidance and interview preparation sessions.</li>
              </ul>
            </div>

            <div className="bg-indigo-50 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-indigo-800">Top Hiring Companies:</h3>
              <p className="text-gray-700 mt-2">Our students have successfully secured positions with prestigious organizations such as:</p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
                <div className="text-center bg-indigo-100 p-4 rounded-lg shadow-sm">
                  <img src="https://www.wipro.com/content/dam/wipro/social-icons/wipro_new_logo.svg" alt="Wipro" className="h-12 mx-auto mb-2" />
                  <p className="text-indigo-800">Wipro</p>
                </div>
                <div className="text-center bg-indigo-100 p-4 rounded-lg shadow-sm">
                  <img src="https://tse3.mm.bing.net/th?id=OIP.T0QTMVmw1gjDzzU5k7yvxwHaHa&pid=Api&P=0&h=180" alt="Infosys" className="h-12 mx-auto mb-2" />
                  <p className="text-indigo-800">Infosys</p>
                </div>
                <div className="text-center bg-indigo-100 p-4 rounded-lg shadow-sm">
                  <img src="https://www.tcs.com/favicon.ico" alt="TCS" className="h-12 mx-auto mb-2" />
                  <p className="text-indigo-800">TCS</p>
                </div>
                <div className="text-center bg-indigo-100 p-4 rounded-lg shadow-sm">
                  <img src="https://www.accenture.com/favicon.ico" alt="Accenture" className="h-12 mx-auto mb-2" />
                  <p className="text-indigo-800">Accenture</p>
                </div>
                <div className="text-center bg-indigo-100 p-4 rounded-lg shadow-sm">
                  <img src="https://www.amazon.com/favicon.ico" alt="Amazon" className="h-12 mx-auto mb-2" />
                  <p className="text-indigo-800">Amazon</p>
                </div>
                <div className="text-center bg-indigo-100 p-4 rounded-lg shadow-sm">
                  <img src="https://www.cognizant.com/favicon.ico" alt="Cognizant" className="h-12 mx-auto mb-2" />
                  <p className="text-indigo-800">Cognizant</p>
                </div>
                {/* Add more companies as needed */}
              </div>
            </div>

            <div className="bg-indigo-50 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-indigo-800">Alumni Success Stories:</h3>
              <p className="text-gray-700 mt-2">
                Our alumni continue to make us proud with their remarkable achievements across various sectors. Many have become leaders in their industries, while others have launched successful start-ups. Their inspiring journeys reflect the success of our students in the professional world.
              </p>
            </div>

            <div className="text-center mt-8">
              <a
                href="/placement"
                className="inline-block px-8 py-3 bg-indigo-600 text-white font-semibold text-lg rounded-full hover:bg-indigo-700 transition duration-300"
              >
                Learn More About Our Placement Program
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placement;
