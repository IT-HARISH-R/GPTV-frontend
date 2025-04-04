import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
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
import SignIn from './pages/SignIn';
import Gallery from './pages/Gallery';

const App = () => {
  return (
    <Router>
      {/* <Navbar /> Your Navbar */}
      <Banner/>
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



        <Route path="/Signup" element={<SignIn />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
