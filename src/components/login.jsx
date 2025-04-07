import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUser } from '../store/features/userSlice'
import authServices from '../store/services/authServices'
import { toast } from "react-toastify";

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')

    try {
      const res = await authServices.login(formData)
      console.log(res)
      if (res.data.status) {
        localStorage.setItem('token', res.data.token);

        const fetchProfile = async () => {
          try {
            const token = localStorage.getItem('token');
            if (!token) {
              throw new Error('Token missing. Please log in.');
            }
            
            const response = await authServices.me()
            dispatch(setUser(response.data))
            toast.success('Login successfully !');

            navigate('/profile')
          } catch (err) {
            setError(err.message || 'Failed to fetch profile.');
            // console.error(err);
          }

        }

        fetchProfile()

      }
    } catch (err) {
      setError(err.response?.data?.message)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Login</h2>

        {error && <div className="text-red-500 mb-4">{error}</div>}

        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 text-sm font-medium">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md"
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
