import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner';

const Navbar = () => {
    return (
        <>
            <Banner />
            <nav className="bg-primary text-white shadow-md font-sans">
                <div className="container mx-auto flex items-center p-4">
                    <div className="w-full flex justify-between">
                        <Link to="/" className="text-lg hover:text-secondary">Home</Link>

                        <Link to="/about" className="text-lg hover:text-secondary">About</Link>

                        <Link to="/courses" className="text-lg hover:text-secondary">Courses</Link>

                        <Link to="/contact" className="text-lg hover:text-secondary">Contact</Link>

                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;

                    {/* <div className="text-2xl font-semibold">
            <Link to="/" className="hover:text-secondary">Govt. Polytechnic College</Link>
          </div> */}