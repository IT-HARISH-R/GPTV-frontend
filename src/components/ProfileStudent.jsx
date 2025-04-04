import React from 'react'

const ProfileStudent = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-md mt-10">
      <h1 className="text-3xl font-semibold text-blue-600 mb-4">Student Dashboard</h1>
      <p className="text-gray-700">Hey there! You are logged in as a student. 🎓</p>

      {/* Example Student Info Section */}
      <div className="mt-6">
        <h2 className="text-xl font-bold">Your Info</h2>
        <ul className="list-disc list-inside text-gray-600 mt-2">
          <li>Name: Harish</li>
          <li>Course: MERN Stack</li>
          <li>Institute: Guvi</li>
        </ul>
      </div>
    </div>
  )
}

export default ProfileStudent
