// // src/components/CreateEmployee.jsx
// import React, { useState } from 'react'

// const CreateEmployee = () => {
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     department: '',
//     password: '',
//   })

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value })
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log('Employee Created:', form)
//     // TODO: Connect this to backend API
//   }

//   return (
//     <div className="p-6 max-w-md mx-auto">
//       <h2 className="text-2xl font-semibold text-center mb-4">Create Employee</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           name="name"
//           placeholder="Full Name"
//           value={form.name}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={form.email}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//         />
//         <input
//           type="text"
//           name="department"
//           placeholder="Department"
//           value={form.department}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={form.password}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//         />
//         <button type="submit" className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700">
//           Submit
//         </button>
//       </form>
//     </div>
//   )
// }

// export default CreateEmployee
