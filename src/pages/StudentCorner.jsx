import React from "react";

const StudentCorner = () => {
  return (
    <div className="w-full min-h-screen bg-cover bg-center bg-fixed relative" style={{ backgroundImage: "url('/college-campus.jpg')" }}>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      <div className="container mx-auto p-6 text-white relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center uppercase mb-6 md:mb-10 transition-transform duration-300 hover:scale-105">Student Corner</h1>
        
        <p className="text-base md:text-lg text-center max-w-3xl mx-auto mb-8 md:mb-12 bg-black bg-opacity-50 p-4 rounded-lg hover:bg-opacity-70 transition-colors duration-300">
          Welcome to the Student Corner of <span className="font-semibold text-yellow-400">Government Polytechnic College, Vanavasi</span>. Here, you can access the latest announcements, study materials, timetables, placement updates, and other essential resources to support your academic journey.
        </p>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[{
            title: "Announcements & Notices",
            color: "text-yellow-400",
            items: ["New academic session starts from June 2025", "Semester exam results published", "Upcoming college events and workshops"]
          }, {
            title: "Study Materials & Notes",
            color: "text-green-400",
            buttonColor: "bg-green-500 hover:bg-green-600",
            text: "Download lecture notes, reference books, and previous year question papers."
          }, {
            title: "Timetable & Syllabus",
            color: "text-blue-400",
            buttonColor: "bg-blue-500 hover:bg-blue-600",
            text: "Get the latest academic syllabus and class schedules for all departments."
          }, {
            title: "Student Clubs & Activities",
            color: "text-orange-400",
            buttonColor: "bg-orange-500 hover:bg-orange-600",
            text: "Join student clubs, technical teams, and cultural groups to develop your skills."
          }, {
            title: "Placement & Career Opportunities",
            color: "text-purple-400",
            buttonColor: "bg-purple-500 hover:bg-purple-600",
            text: "Find job openings, internship opportunities, and campus recruitment details."
          }, {
            title: "Discussion Forum",
            color: "text-red-400",
            buttonColor: "bg-red-500 hover:bg-red-600",
            text: "Connect with faculty and students for academic discussions and problem-solving."
          }].map((section, index) => (
            <div key={index} className="p-6 bg-black bg-opacity-60 rounded-lg w-full transform transition-transform duration-300 hover:scale-105 hover:bg-opacity-80">
              <h2 className={`text-xl md:text-2xl font-semibold ${section.color} mb-3`}>{section.title}</h2>
              {section.items ? (
                <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                  {section.items.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              ) : (
                <>
                  <p className="text-sm md:text-base">{section.text}</p>
                  <button className={`mt-4 w-full px-5 py-3 text-white rounded-lg transition-transform duration-300 hover:scale-105 ${section.buttonColor}`}>Explore</button>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentCorner;