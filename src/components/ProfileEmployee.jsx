import React from 'react'

const ProfileEmployee = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-md mt-10">
      <h1 className="text-3xl font-semibold text-green-600 mb-4">Employee Dashboard</h1>
      <p className="text-gray-700">Hello! You're logged in as an employee. 🧑‍💼</p>

      {/* Example Employee Info Section */}
      <div className="mt-6">
        <h2 className="text-xl font-bold">Your Info</h2>
        <ul className="list-disc list-inside text-gray-600 mt-2">
          <li>Name: Harish</li>
          <li>Department: Development</li>
          <li>Role: Frontend Engineer</li>
        </ul>
      </div>
    </div>
  )
}

export default ProfileEmployee
