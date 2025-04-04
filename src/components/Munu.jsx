import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react";

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        
        <nav className="sticky top-0 z-[100] bg-gray-900 text-white p-4 shadow-lg">
            {/* Mobile Menu Button */}
            <div className="flex justify-between items-center lg:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white focus:outline-none p-3 rounded-md hover:bg-gray-800 transition-all"
                >
                    {isOpen ? <CloseIcon size={32} /> : <MenuIcon size={32} />}
                </button>
            </div>

            {/* Navigation Links */}
            <ul
                className={`fixed top-0 left-0 w-full py-4 bg-gray-900 lg:relative lg:flex lg:bg-transparent 
                flex-col items-center justify-center text-lg font-semibold 
                transition-transform duration-300 ease-in-out 
                ${isOpen ? "translate-x-0" : "-translate-x-full"} 
                lg:translate-x-0 lg:flex-row lg:justify-between lg:w-full lg:px-4 lg:py-2`}
            >
                {[
                    { path: "/", label: "Home" },
                    { path: "/about", label: "About Us" },
                    { path: "/departments", label: "Departments" },
                    { path: "/placement", label: "Placement" },
                    { path: "/admission", label: "Admission" },
                    { path: "/student-corner", label: "Student Corner" },
                    { path: "/anti-ragging", label: "Anti Ragging" },
                    { path: "/gallery", label: "Gallery" },
                    { path: "/contact", label: "Contact Us" }
                ].map((item, index) => (
                    <li key={index} className="relative group">
                        <Link
                            to={item.path}
                            className="hover:text-yellow-400 transition-colors duration-300 ease-in-out relative truncate block w-full text-center lg:w-auto px-2"
                            onClick={() => setIsOpen(false)} // Close menu on link click
                        >
                            {item.label}
                            <span className="absolute left-0 bottom-0 w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </li>
                ))}

                {/* Close Button (Only for Mobile) */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-5 right-5 text-white lg:hidden"
                >
                    <CloseIcon size={32} />
                </button>
            </ul>
        </nav>
    );
};

export default Menu;






// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { Menu as MenuIcon, X as CloseIcon } from "lucide-react";
// import Banner from "./Banner";

// const Menu = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <div>
//             <Banner />
//             <nav className="bg-gray-900 text-white p-4 shadow-lg sticky top-10 z-50 ">
//                 {/* Mobile Menu Button */}
//                 <div className="flex justify-between items-center lg:hidden">
//                     <button
//                         onClick={() => setIsOpen(!isOpen)}
//                         className="text-white focus:outline-none p-3 rounded-md hover:bg-gray-800 transition-all"
//                     >
//                         {isOpen ? <CloseIcon size={32} /> : <MenuIcon size={32} />}
//                     </button>
//                 </div>

//                 {/* Navigation Links */}
//                 <ul className={`
//     fixed top-0 left-0 w-full  h-full bg-gray-900 lg:relative lg:flex lg:bg-transparent
//     flex-col items-center justify-center text-lg font-semibold
//     transition-transform duration-300 ease-in-out
//     ${isOpen ? "translate-x-0" : "-translate-x-full"}
//     lg:translate-x-0 lg:flex-row lg:justify-between lg:w-full lg:px-4 lg:py-2
// `}>
//                     {[
//                         { path: "/", label: "Home" },
//                         { path: "/about", label: "About Us" },
//                         { path: "/departments", label: "Departments" },
//                         { path: "/placement", label: "Placement" },
//                         { path: "/admission", label: "Admission" },
//                         { path: "/student-corner", label: "Student Corner" },
//                         { path: "/anti-ragging", label: "Anti Ragging" },
//                         { path: "/gallery", label: "Gallery" },
//                         { path: "/contact", label: "Contact Us" }
//                     ].map((item, index) => (
//                         <li key={index} className="relative group">
//                             <Link
//                                 to={item.path}
//                                 className="hover:text-yellow-400 transition-colors duration-300 ease-in-out relative truncate block w-full text-center lg:w-auto px-2"
//                             >
//                                 {item.label}
//                                 <span className="absolute left-0 bottom-0 w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
//                             </Link>
//                         </li>
//                     ))}

//                     {/* Close Button (Only for Mobile) */}
//                     <button
//                         onClick={() => setIsOpen(false)}
//                         className="absolute top-5 right-5 text-white lg:hidden"
//                     >
//                         <CloseIcon size={32} />
//                     </button>
//                 </ul>
//             </nav>
//         </div>
//     );
// };

// export default Menu;
