import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import ProfileStudent from '../components/ProfileStudent'
import ProfileEmployee from '../components/ProfileEmployee'
import ProfileAdmin from '../components/ProfileAdmin'



const Profile = () => {
    // const user = useSelector((state) => state.user.user)

    const user = useSelector((state) => state.user.user)
    console.log(user)
    if (!user) {
        // return <Navigate to="/login" replace />
        return <Navigate to="/login" replace />
    }

    if (user.role === 'student') {
        return <ProfileStudent />
    }

    if (user.role === 'employee') {
        return <ProfileEmployee />
    }

    if (user.role === 'admin') {
        return <ProfileAdmin />
    }

    return <div>Invalid role</div>
}

export default Profile
