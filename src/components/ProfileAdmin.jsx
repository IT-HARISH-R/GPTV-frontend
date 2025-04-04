import React from 'react'

const ProfileAdmin = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-md mt-10">
      <h1 className="text-3xl font-semibold text-red-600 mb-4">Admin Dashboard</h1>
      <p className="text-gray-700">Welcome, mighty admin! 🛡️ You have full access.</p>

      {/* Example Admin Info Section */}
      <div className="mt-6">
        <h2 className="text-xl font-bold">Admin Info</h2>
        <ul className="list-disc list-inside text-gray-600 mt-2">
          <li>Name: Harish</li>
          <li>Privileges: Full Access</li>
          <li>Manage Users, Events, and System Settings</li>
        </ul>
      </div>
    </div>
  )
}

export default ProfileAdmin
