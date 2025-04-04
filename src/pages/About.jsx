import React, { useEffect } from "react";
import '../App.css'
import Footer from "../components/Footer";

const About = () => {

    useEffect(() => {
        const sections = document.querySelectorAll('.scroll-animates');
        const options = {
            rootMargin: '0px 0px -50px 0px', // Adjusts trigger point
            threshold: 0.5, // When 50% of the element is visible
        };

        const handleIntersect = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate'); // Add animation class when visible
                    observer.unobserve(entry.target); // Stop observing after the animation starts
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, options);
        sections.forEach(section => observer.observe(section));

        return () => {
            observer.disconnect();
        };
    }, []);


    return (
        <div>
            <section className="bg-fixed bg-cover bg-gray-50"
                style={{ backgroundImage: "url('https://gplucknow.co.in/public/user/assets/images/pattern/p4.png')" }}>
                <div className="container mx-auto px-4 py-12" data-aos="fade-up">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* About College Section */}
                        <div>
                            <div className="section-title">
                                <h6 className="text-gray-500 uppercase text-lg tracking-wider">About College</h6>
                                <h2 className="text-3xl font-bold uppercase border-b-4 border-indigo-600 pb-2">Welcome to GPC, Vanavasi</h2>
                                <p className="text-gray-700 mt-4">
                                    Government Polytechnic College, Vanavasi is a renowned institution dedicated to providing quality technical education. Established in 1992, the college has been instrumental in shaping the careers of thousands of students by offering industry-oriented diploma programs.

                                    With a sprawling 25-acre campus, state-of-the-art laboratories, and well-equipped classrooms, the college ensures that students receive hands-on training in various engineering disciplines. It is affiliated with the Directorate of Technical Education (DTE), Tamil Nadu, and follows a curriculum that is regularly updated to meet industry standards.

                                    The institution boasts an experienced faculty, advanced infrastructure, and strong industry collaborations, facilitating excellent placement opportunities with leading companies like TVS Motors, Ashok Leyland, Wipro, and TCS.

                                    Apart from academics, the college encourages students to participate in extracurricular activities, technical symposiums, and workshops, fostering innovation and practical learning. With a student intake of over 200 every year and a commitment to excellence, Government Polytechnic College, Vanavasi continues to be a preferred destination for aspiring engineers.
                                </p>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div>
                            <div className="rounded-lg overflow-hidden shadow-lg">
                                <img src="https://gptcvanavasi.co.in//thumbs/banner/TOP%20VIEW1.jpg"
                                    alt="College Image" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </div>

                    {/* Highlights Section */}
                    <div className="mt-12" data-aos="fade-up">
                        <h6 className="text-gray-500 uppercase text-lg tracking-wider">Highlights</h6>
                        <h2 className="text-3xl font-bold uppercase border-b-4 border-indigo-600 pb-2">Government Polytechnic Vanavasi</h2>

                        {/* Table Section */}
                        <div className="overflow-x-auto mt-6 ">
                            <table className="w-full table-auto border-collapse border border-gray-300 shadow-lg rounded-lg">
                                <thead>
                                    <tr className="bg-indigo-600 text-white text-left">
                                        <th className="px-6 py-3 border border-gray-400">Component</th>
                                        <th className="px-6 py-3 border border-gray-400">Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-gray-100 transition duration-300">
                                        <td className="px-6 py-3 border border-gray-300">Established in</td>
                                        <td className="px-6 py-3 border border-gray-300">1992</td>
                                    </tr>
                                    <tr className="hover:bg-gray-100 transition duration-300">
                                        <td className="px-6 py-3 border border-gray-300">Affiliations</td>
                                        <td className="px-6 py-3 border border-gray-300">Directorate of Technical Education (DTE)</td>
                                    </tr>
                                    <tr className="hover:bg-gray-100 transition duration-300">
                                        <td className="px-6 py-3 border border-gray-300">Address</td>
                                        <td className="px-6 py-3 border border-gray-300">Vanavasi, Mettur Tk, Salem, Tamil Nadu - 636457</td>
                                    </tr>
                                    <tr className="hover:bg-gray-100 transition duration-300">
                                        <td className="px-6 py-3 border border-gray-300">Student Intake</td>
                                        <td className="px-6 py-3 border border-gray-300">200+ Students</td>
                                    </tr>
                                    <tr className="hover:bg-gray-100 transition duration-300">
                                        <td className="px-6 py-3 border border-gray-300">Total Faculty</td>
                                        <td className="px-6 py-3 border border-gray-300">50 Members</td>
                                    </tr>
                                    <tr className="hover:bg-gray-100 transition duration-300">
                                        <td className="px-6 py-3 border border-gray-300">Campus Size</td>
                                        <td className="px-6 py-3 border border-gray-300">25 Acres</td>
                                    </tr>
                                    <tr className="hover:bg-gray-100 transition duration-300">
                                        <td className="px-6 py-3 border border-gray-300">Exams Accepted</td>
                                        <td className="px-6 py-3 border border-gray-300">SSLC, ITI, or 12th</td>
                                    </tr>
                                    <tr className="hover:bg-gray-100 transition duration-300">
                                        <td className="px-6 py-3 border border-gray-300">Top Recruiters</td>
                                        <td className="px-6 py-3 border border-gray-300">TVS Motors, Ashok Leyland, Wipro, TCS</td>
                                    </tr>
                                    <tr className="hover:bg-gray-100 transition duration-300">
                                        <td className="px-6 py-3 border border-gray-300">Placement Rate</td>
                                        <td className="px-6 py-3 border border-gray-300">80%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default About;






{/* <section className="relative bg-cover bg-center py-16 scroll-animate" style={{
    backgroundImage: "url('https://gplucknow.co.in/public/user/assets/images/bg/bg1.jpg')"
}}>
    {/* Background Overlay */}
<div className="absolute inset-0 bg-black opacity-70"></div>

{/* Content */ }
<div className="relative z-10 container mx-auto px-6 text-primary text-start">
    <h2 className="text-4xl font-bold mb-4">About   College </h2>
</div>
// </section> */}