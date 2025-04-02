import { Link } from "react-router-dom";
import Banner from "./Banner";

const Menu = () => {

    return (
        <div>
            <Banner />
            <nav className="bg-gray-800 text-white p-4">
                <ul className="flex flex-wrap justify-around gap-4">
                    <li>
                        <Link to="/" className="hover:text-yellow-400">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:text-yellow-400">About Us</Link>
                    </li>
                    <li>
                        <Link to="/departments" className="hover:text-yellow-400">Departments</Link>
                    </li>
                    <li>
                        <Link to="/placement" className="hover:text-yellow-400">Placement</Link>
                    </li>
                    <li>
                        <Link to="/admission" className="hover:text-yellow-400">Admission</Link>
                    </li>
                    <li>
                        <Link to="/student-corner" className="hover:text-yellow-400">Student Corner</Link>
                    </li>
                    <li>
                        <Link to="/anti-ragging" className="hover:text-yellow-400">Anti Ragging</Link>
                    </li>
                    <li>
                        <Link to="/gallery" className="hover:text-yellow-400">Gallery</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:text-yellow-400">Contact Us</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Menu;
