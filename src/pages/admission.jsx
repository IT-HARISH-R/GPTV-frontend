import React from "react";
import Footer from "../components/Footer";

const Admission = () => {
    return (
        <div>
            <div className="bg-blue-50 min-h-screen flex items-center justify-center p-6">
                <div className="container mx-auto px-4 md:px-12 lg:px-24 py-12">
                    <h2 className="font-sans text-4xl md:text-5xl font-extrabold text-center text-blue-900 mb-12">
                        <span className="text-primary">Admission</span> Details
                    </h2>

                    <div className="space-y-12">
                        <section>
                            <h3 className="text-3xl font-bold text-blue-800 mb-4 font-sans"> <span className="text-primary">Courses</span> Offered</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {["Civil Engineering", "Computer Engineering", "Electrical and Electronics Engineering", "Electronics and Communication Engineering", "Mechanical Engineering", "Digital Manufacturing Technologies"].map((course, index) => (
                                    <div key={index} className="p-4 bg-white shadow-md rounded-md text-gray-800 text-lg font-medium">
                                        {course}
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h3 className="text-3xl font-bold text-blue-800 mb-4">
                                <span className="text-primary">Eligibility </span>Criteria</h3>
                            <p className="text-lg text-gray-700">Candidates must have passed the 10th standard (SSLC) from a recognized board. Admission is merit-based, considering the marks obtained in the 10th standard examination. No entrance exam is required.</p>
                        </section>

                        <section>
                            <h3 className="text-3xl font-bold text-blue-800 mb-4"> <span className="text-primary">Admission </span> Process</h3>
                            <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
                                <li><span className="font-semibold">Application Form:</span> Available at the college office or downloadable from the official website.</li>
                                <li><span className="font-semibold">Submission:</span> Submit the filled form with required documents before the deadline.</li>
                                <li><span className="font-semibold">Selection & Counseling:</span> Shortlisted candidates based on SSLC marks will undergo document verification.</li>
                                <li><span className="font-semibold">Fee Payment & Enrollment:</span> Selected students must pay the admission fee to confirm their seat.</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-3xl font-bold text-blue-800 mb-4">  <span className="text-primary">Documents </span> Required</h3>
                            <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
                                <li>10th Mark Sheet (SSLC) – Original & Photocopy</li>
                                <li>Transfer Certificate (TC)</li>
                                <li>Community Certificate (if applicable)</li>
                                <li>Aadhaar Card (ID Proof)</li>
                                <li>Passport-size Photographs (4 Nos.)</li>
                                <li>Income Certificate (if applicable for fee concession)</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-3xl font-bold text-blue-800 mb-4"> <span className="text-primary">Fee </span> Structure</h3>
                            <p className="text-lg text-gray-700">Tuition Fee: ₹6,471 per year (Approximate). Additional Examination & Lab Fees may apply.</p>
                        </section>

                        <section>
                            <h3 className="text-3xl font-bold text-blue-800 mb-4"> <span className="text-primary"> Important</span> Dates</h3>
                            <ul className="list-disc pl-6 text-lg text-gray-700">
                                <li>Application Start Date: To be announced</li>
                                <li>Last Date for Application Submission: To be announced</li>
                                <li>Counseling & Admission: As per DOTE guidelines</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-3xl font-bold text-blue-800 mb-4"> <span className="text-primary">Contact</span> Us</h3>
                            <p className="text-lg text-gray-700">
                                📍 Government Polytechnic College, Vanavasi, Salem District, Tamil Nadu<br />
                                📞 Phone: 04298266177<br />
                                📧 Email: gptcvanavasi@gmail.com
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Admission;