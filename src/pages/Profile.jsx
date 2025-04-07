import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import ProfileStudent from '../components/ProfileStudent'
import ProfileEmployee from '../components/ProfileEmployee'
import ProfileAdmin from '../components/ProfileAdmin'
import { setUser } from '../store/features/userSlice'
import authServices from '../store/services/authServices'

const Profile = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((state) => state.user.user)
    const [loading, setLoading] = useState(true)

    const fetchProfile = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) throw new Error('Token missing');

            const response = await authServices.me()
            dispatch(setUser(response.data))
        } catch (err) {
            // console.error(err);
            navigate('/login');
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (!user) {
            fetchProfile()
        } else {
            setLoading(false)
        }
    }, [user])

    if (loading) return <div className="text-center mt-10">Loading profile...</div>

    if (!user) return <Navigate to="/login" replace />

    const role = user?.user?.role
    if (role === 'student') return <ProfileStudent />
    if (role === 'employee') return <ProfileEmployee />
    if (role === 'admin') return <ProfileAdmin />

    return <div>Invalid role</div>
}

export default Profile
