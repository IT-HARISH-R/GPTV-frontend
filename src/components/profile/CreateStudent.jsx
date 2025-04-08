import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import authServices from "../../store/services/authServices";
// import "react-toastify/dist/ReactToastify.css";

const CreateStudent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",

  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    const isEmpty = Object.values(formData).some((value) => !value);
    if (isEmpty) {
      toast.error("Please fill out all fields.");
      return;
    }
    const res = await authServices.register(formData);
    console.log(res)
    toast.success(res.data.message);
    // Simulate API call here
    // console.log("Submitted student data:", formData);
    // toast.success("Student created successfully!");
    setFormData({
      name: "",
      email: "",

    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4">
      <ToastContainer position="top-center" autoClose={2000} />
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-2xl space-y-6">
        <h2 className="text-3xl font-semibold text-center text-blue-700">
          🎓 Register New Student
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            { label: "Full Name", name: "name", type: "text" },
            { label: "Email", name: "email", type: "email" },
          ].map(({ label, name, type }) => (
            <div key={name}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {label}
              </label>
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder={`Enter ${label.toLowerCase()}`}
              />
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
          >
            ➕ Create Student
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreateStudent;
