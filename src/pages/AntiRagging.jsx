import React, { useEffect, useState } from "react";
import complainSeever from "../store/services/complainSeever";

const AntiRagging = () => {

  const [formData, setFormData] = useState({
    name: "",
    department: "",
    incident: "",
    anonymous: false,
  });



  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    if (formData.name === '' || formData.anonymous) {
      formData.name = null
    }
    console.log(formData)

    const fetchComplaints = async () => {
      try {
        const data = await complainSeever.fileComplaint(formData);
        console.log(data);
        setFormData({
          name: "",
          department: "",
          incident: "",
          anonymous: false,
        });

      } catch (error) {
        console.error("Error fetching complaints:", error);
      }
    };
    fetchComplaints()
  };

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const data = await complainSeever.getComplaints();
        console.log(data);
      } catch (error) {
        console.error("Error fetching complaints:", error);
      }
    };
    fetchComplaints();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-700 text-white p-6">
      <div className="container mx-auto max-w-4xl bg-black bg-opacity-80 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-yellow-400">
          Anti-Ragging Policy
        </h1>
        <p className="text-lg text-center mb-6">
          Ragging in any form is strictly prohibited at <span className="font-semibold text-yellow-300">Government Polytechnic College, Vanavasi</span>. Any participation in ragging activities will result in strict disciplinary actions.
        </p>
        <p className="text-sm text-center mb-6">
          Ragging includes any conduct by students that causes physical, mental, or emotional distress to another student. The college follows strict disciplinary and legal measures to prevent and address such cases.
        </p>
        <h2 className="text-2xl font-semibold text-red-500 mb-4">File a Complaint</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {!formData.anonymous && (
            <div>
              <label className="block text-sm font-semibold mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-yellow-400"
              />
            </div>
          )}
          <div>
            <label className="block text-sm font-semibold mb-1">Department</label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-yellow-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Incident Details</label>
            <textarea
              name="incident"
              value={formData.incident}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-yellow-400"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="anonymous"
              checked={formData.anonymous}
              onChange={handleChange}
              className="mr-2 w-5 h-5"
            />
            <label className="text-sm">Submit anonymously</label>
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold transition-all duration-200"
          >
            Submit Complaint
          </button>
        </form>
        <div className="mt-6 text-center text-sm">
          <p>Need help? Contact the <span className="text-yellow-400">Anti-Ragging Committee</span> at:</p>
          <p className="text-yellow-300">Helpline: [Provide Helpline] | Email: [Provide Email]</p>
        </div>
      </div>
    </div>
  );
};

export default AntiRagging;
























// import React, { useEffect, useState } from "react";
// import complainSeever from "../store/services/complainSeever";

// const AntiRagging = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     department: "",
//     incident: "",
//     anonymous: false,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Complaint submitted successfully!");
//     setFormData({ name: "", department: "", incident: "", anonymous: false });
//   };

//   useEffect(() => {
//     const fetchComplaints = async () => {
//       try {
//         const data = await complainSeever.getComplaints();
//         console.log(data);
//         // setComplaints(data);
//       } catch (error) {
//         console.error("Error fetching complaints:", error);
//       }
//     };

//     fetchComplaints();
//   }, [])

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-700 text-white p-6">
//       <div className="container mx-auto max-w-4xl bg-black bg-opacity-80 p-6 rounded-lg shadow-lg">
//         {/* Section 1: Brief About Anti-Ragging */}
//         <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-yellow-400">
//           Anti-Ragging Policy
//         </h1>
//         <p className="text-lg text-center mb-6">
//           Ragging in any form is strictly prohibited at <span className="font-semibold text-yellow-300">Government Polytechnic College, Vanavasi</span>. Any participation in ragging activities will result in strict disciplinary actions.
//         </p>
//         <p className="text-sm text-center mb-6">
//           Ragging includes any conduct by students that causes physical, mental, or emotional distress to another student. The college follows strict disciplinary and legal measures to prevent and address such cases.
//         </p>

//         {/* Section 2: Anti-Ragging Complaint Form */}
//         <h2 className="text-2xl font-semibold text-red-500 mb-4">File a Complaint</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {!formData.anonymous && (
//             <div>
//               <label className="block text-sm font-semibold mb-1">Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-yellow-400"
//                 required
//               />
//             </div>
//           )}

//           <div>
//             <label className="block text-sm font-semibold mb-1">Department</label>
//             <input
//               type="text"
//               name="department"
//               value={formData.department}
//               onChange={handleChange}
//               className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-yellow-400"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-semibold mb-1">Incident Details</label>
//             <textarea
//               name="incident"
//               value={formData.incident}
//               onChange={handleChange}
//               className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-yellow-400"
//               rows="4"
//               required
//             ></textarea>
//           </div>

//           <div className="flex items-center">
//             <input
//               type="checkbox"
//               name="anonymous"
//               checked={formData.anonymous}
//               onChange={handleChange}
//               className="mr-2 w-5 h-5"
//             />
//             <label className="text-sm">Submit anonymously</label>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold transition-all duration-200"
//           >
//             Submit Complaint
//           </button>
//         </form>

//         <div className="mt-6 text-center text-sm">
//           <p>Need help? Contact the <span className="text-yellow-400">Anti-Ragging Committee</span> at:</p>
//           <p className="text-yellow-300">Helpline: [Provide Helpline] | Email: [Provide Email]</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AntiRagging;
