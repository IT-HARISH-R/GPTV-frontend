import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import authServices from "../../store/services/authServices";
// import "react-toastify/dist/ReactToastify.css";

const CreateStudent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [loading, setLoading] = useState(false); // 🔄 Loading state

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isEmpty = Object.values(formData).some((value) => !value);
    if (isEmpty) {
      toast.error("Please fill out all fields.");
      return;
    }

    setLoading(true); // Start loading
    try {
      const res = await authServices.register(formData);
      toast.success(res.data.message);

      setFormData({
        name: "",
        email: "",
      });
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <section className="flex items-center justify-center bg-gray-100 py-12 px-4">
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
                disabled={loading}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50"
                placeholder={`Enter ${label.toLowerCase()}`}
              />
            </div>
          ))}

          <button
            type="submit"
            disabled={loading}
            className={`w-full ${
              loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
            } text-white font-semibold py-3 rounded-lg transition`}
          >
            {loading ? "Creating..." : "➕ Create Student"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreateStudent;
