import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner';

    const Navbar = () => {
        return (
            <>
                <Banner />
                <nav className="bg-gray-900 text-gray-200 shadow-lg font-sans">
                    <div className="container mx-auto flex items-center py-4 px-6">
                        <div className="w-full flex justify-between">
                            <Link to="/" className="text-lg font-medium tracking-wide hover:text-yellow-400 transition-colors duration-300">
                                Home
                            </Link>
    
                            <Link to="/about" className="text-lg font-medium tracking-wide hover:text-yellow-400 transition-colors duration-300">
                                About
                            </Link>
    
                            <Link to="/courses" className="text-lg font-medium tracking-wide hover:text-yellow-400 transition-colors duration-300">
                                Courses
                            </Link>
    
                            <Link to="/contact" className="text-lg font-medium tracking-wide hover:text-yellow-400 transition-colors duration-300">
                                Contact
                            </Link>
                        </div>
                    </div>
                </nav>
            </>
        );
    };
    


export default Navbar;

             