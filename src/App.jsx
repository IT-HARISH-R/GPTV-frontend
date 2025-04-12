import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './components/Munu';
import Departments from './pages/Departments';
import NotFound from './pages/NotFound';
import CivilDepartment from './components/Departments/CivilDepartment ';
import MechanicalDepartment from './components/Departments/MechanicalDepartment';
import EEEDepartment from './components/Departments/EEEDepartment';
import ECEDepartment from './components/Departments/ECEDepartment';
import ComputerDepartment from './components/Departments/ComputerDepartment';
import GeneralDepartment from './components/Departments/GeneralDepartment';
import Placement from './pages/Placement';
import Admission from './pages/admission';
import StudentCorner from './pages/StudentCorner';
import AntiRagging from './pages/AntiRagging';
import Banner from './components/Banner';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { ToastContainer } from "react-toastify";
import GalleryUpload from './pages/GalleryUpload';
import Profile from './pages/Profile';
import Login from './components/login';
import ResetPassword from './components/Password/ResetPassword';
import ForgotPassword from './components/Password/ForgotPassword';
import galleryServices from './store/services/galleryServices';


const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [images, setImages] = useState([]);


  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await galleryServices.getGallery();
        setImages(res.data);
      } catch (err) {
        console.error("Error fetching gallery:", err);
      }
    };
    fetchImages();
  }, []);


  return (

    <Router>
      <ToastContainer />

      {/* <Navbar /> Your Navbar */}
      <Banner />
      <Menu />
      <Routes>
        {/* Define Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/departments" element={<Departments />} />
        {/* ---------- */}
        <Route path="/departments/civil" element={<CivilDepartment />} />
        <Route path="/departments/mechanical" element={<MechanicalDepartment />} />
        <Route path="/departments/eee" element={<EEEDepartment />} />
        <Route path="/departments/ece" element={<ECEDepartment />} />
        <Route path="/departments/computer" element={<ComputerDepartment />} />
        <Route path="/departments/general" element={<GeneralDepartment />} />
        {/* --------- */}

        <Route path="/placement" element={<Placement />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/student-corner" element={<StudentCorner />} />
        <Route path="/anti-ragging" element={<AntiRagging />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />



        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {/* <Route path="/reset-password" element={<ResetPassword />} /> */}
        <Route path="/reset-password/:token" element={<ResetPassword />} />


        {/* root not fount */}
        <Route path="/galleryupload" element={<GalleryUpload />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
