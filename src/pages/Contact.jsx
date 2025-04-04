import React from 'react';

const Contact = () => {
    return (
        <section data-aos="fade-up" className="bg-white py-16 px-4" id="contact">
            <div className="max-w-7xl mx-auto">
                {/* Title */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-blue-800 mb-2"><span className='text-primary  font-sans'>Contact</span>  Us</h2>
                    <p className="text-gray-600">We’re here to help you. Reach out for any inquiries or information.</p>
                </div>
                {/* Info & Form */}
                <div className="grid md:grid-cols-2 gap-12 items-start">


                    <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
                        {/* Office Location */}
                        <div className="flex items-start bg-blue-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
                            <div className="text-blue-600 text-4xl mr-4">
                                <i className="pe-7s-map-2"></i>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-800">OUR OFFICE LOCATION</h4>
                                <p className="text-gray-700 mt-1">
                                    Government Polytechnic College, Vanavasi,<br />
                                    Mettur Taluk, Salem District,<br />
                                    Tamil Nadu - 636457
                                </p>
                            </div>
                        </div>

                        {/* Contact Number */}
                        <div className="flex items-start bg-blue-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
                            <div className="text-blue-600 text-4xl mr-4">
                                <i className="pe-7s-call"></i>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-800">OUR CONTACT NUMBER</h4>
                                <p className="text-gray-700 mt-1">+91 98765 43210</p>
                            </div>
                        </div>

                        {/* Contact Email */}
                        <div className="flex items-start bg-blue-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
                            <div className="text-blue-600 text-4xl mr-4">
                                <i className="pe-7s-mail"></i>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-800">OUR CONTACT E-MAIL</h4>
                                <p className="text-gray-700 mt-1">gpvanavasi@example.com</p>
                            </div>
                        </div>
                    </div>


                    {/* Right - Form */}
                    <form className="space-y-5 animate-fade-in-up">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Subject"
                            className="w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <textarea
                            rows="5"
                            placeholder="Your Message"
                            className="w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-all shadow-md"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Google Maps */}
                <div className="mt-16 animate-fade-in-up">
                    <h3 className="text-2xl font-semibold text-blue-700 mb-4"><span className='text-primary  font-sans'>Find </span> Us on Map</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7812.482341135945!2d77.87978410720827!3d11.748052967893527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba955c039f1748b%3A0xbdadd2affc2891dc!2sGOVERNMENT%20POLYTECHNIC%20COLLEGE%2C%20Vanavasi!5e0!3m2!1sen!2sin!4v1743742396234!5m2!1sen!2sin"
                        width="100%"
                        height="350"
                        allowFullScreen=""
                        loading="lazy"
                        className="w-full border-4 border-blue-200 rounded-xl shadow-lg"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <a
                        href="https://www.google.com/maps/dir/?api=1&destination=Government+Polytechnic+College,+Vanavasi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 text-blue-700 font-semibold hover:underline"
                    >
                        📌 Get Directions on Google Maps
                    </a>

                </div>
            </div>
        </section>
    );
};

export default Contact;
