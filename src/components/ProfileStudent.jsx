import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../store/features/userSlice";


const ProfileStudent = () => {
  const user = useSelector((state) => state.user.user).user;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(setUser(null));
    localStorage.removeItem("token");  
    toast.success("Logged out successfully!");
    setTimeout(() => {
      navigate("/login");  
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-10 px-4">
      <ToastContainer position="top-center" autoClose={2000} />

      <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-3xl p-8 sm:p-10 flex flex-col items-center space-y-8">
        {/* Avatar */}
        <div className="w-28 h-28 rounded-full bg-blue-200 flex items-center justify-center text-3xl font-bold text-white shadow-inner">
          {user?.name?.charAt(0).toUpperCase()}
        </div>

        <h2 className="text-3xl font-extrabold text-blue-700 text-center">
          👤 Student Profile
        </h2>

        <div className="w-full space-y-5 text-center sm:text-left">
          <div>
            <label className="text-sm text-gray-500 font-semibold">Full Name</label>
            <p className="text-xl text-gray-800 font-medium">{user.name}</p>
          </div>
          <div>
            <label className="text-sm text-gray-500 font-semibold">Email</label>
            <p className="text-xl text-gray-800 font-medium">{user.email}</p>
          </div>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="mt-6 bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-xl shadow transition"
        >
          🚪 Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileStudent;
