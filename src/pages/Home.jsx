import React, { useEffect } from 'react';
import '../App.css'
import Footer from '../components/Footer';
import { Link } from "react-router-dom";

const Home = () => {

  useEffect(() => {
    const counters = document.querySelectorAll('.counter');
    const options = {
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.5,
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = el.getAttribute('data-target') || el.getAttribute('data-target-students');

          const updateCount = (increment) => {
            let count = +el.innerText;
            const targetCount = +target;

            if (count < targetCount) {
              el.innerText = count + increment;
              setTimeout(() => updateCount(increment), target === el.getAttribute('data-target') ? 30 : 3);
            }
          };

          // Determine the increment for the count
          const increment = target === el.getAttribute('data-target-students') ? 10 : 1;
          updateCount(increment);

          observer.unobserve(el);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    counters.forEach(counter => observer.observe(counter));

    return () => {
      observer.disconnect();
    };
  }, []);




  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      {/* Welcome Section with Background Image */}
      <section
        className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(https://www.mymathews.com/media/institute_banner/Government_Polytechnic_College_Vanavasi_BANNER.JPG)`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Darker overlay for better contrast */}
        <div data-aos="fade-up" className="relative z-10 text-center text-white px-6">
          <h1 className="text-2xl sm:text-5xl font-bold mb-6 drop-shadow-lg">
            Welcome to Government Polytechnic College Vanavasi, Salem
          </h1>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Empowering students with knowledge, skills, and a bright future.
          </p>
          <Link to='/about' className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
            Learn More
          </Link>
        </div>
      </section>



      {/* About Section */}
      <section
        data-aos="fade-up"
        className="bg-gray-50 py-12 px-6 w-full">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl font-semibold text-primary mb-4 font-sans">
              About <span className="text-secondary">College</span>
            </h2>
            <h3 className="text-2xl font-semibold text-primary mb-2 font-sans">
              Welcome to <span className="text-secondary">GPC, Vanavasi</span>
            </h3>
            <p className="text-lg text-[#4f343a] mb-6 leading-relaxed">
              Government Polytechnic College, Vanavasi, Salem is committed to providing world-class education that empowers students to become the next generation of leaders, engineers, and technologists. Our comprehensive range of specialized courses equips students with the knowledge and skills needed to excel in their careers and contribute to the advancement of society.
            </p>
            <p className="text-lg text-gray-700 mb-5">
              A place where knowledge meets innovation. Join us in shaping a brighter future through high-quality education and hands-on learning experiences.
            </p>
            <Link to='/about' className="bg-primary text-white py-2 px-6 rounded-lg hover:bg-secondary transition duration-300">
              Know More
            </Link>
          </div>

          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <img
              src="https://gptcvanavasi.co.in//thumbs/banner/banner1.jpg"
              alt="College Image"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section data-aos="fade-up"
        className="bt-12 w-full p-6  bg-gray-50">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-primary mb-4 font-sans">Our Courses</h2>
          <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
            Explore the wide range of courses we offer to shape your career. Our courses are designed to provide both theoretical and practical knowledge to help you excel in your chosen field.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-white shadow-lg p-8 rounded-lg w-64 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-bold text-primary mb-4">Electronics and Communication Engineering (ECE)</h3>
            <p className="text-gray-600">Gain expertise in Electronics and Communication systems, including signal processing, communication networks, and more.</p>
          </div>
          <div className="bg-white shadow-lg p-8 rounded-lg w-64 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-bold text-primary mb-4">Computer Science Engineering (CSE)</h3>
            <p className="text-gray-600">Advance your skills in programming, algorithms, data structures, and system design with our CSE courses.</p>
          </div>
          <div className="bg-white shadow-lg p-8 rounded-lg w-64 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-bold text-primary mb-4">Mechanical Engineering (MECH)</h3>
            <p className="text-gray-600">Study the fundamentals of Mechanical Engineering, focusing on mechanics, thermodynamics, and materials science.</p>
          </div>
          <div className="bg-white shadow-lg p-8 rounded-lg w-64 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-bold text-primary mb-4">Civil Engineering (CE)</h3>
            <p className="text-gray-600">Learn about structural design, construction materials, and urban infrastructure with our Civil Engineering courses.</p>
          </div>
          <div className="bg-white shadow-lg p-8 rounded-lg w-64 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-bold text-primary mb-4">Electrical and Electronics Engineering (EEE)</h3>
            <p className="text-gray-600">Explore the principles of electrical circuits, power systems, and electronics in our EEE courses.</p>
          </div>
        </div>
      </section>



      {/* Fun Facts Section */}
      <section data-aos="fade-up"

        className="relative w-full bg-cover bg-center scrol-animate"
        style={{
          backgroundImage: `url(https://gplucknow.co.in/public/user/assets/images/bg/bg2.jpg)`,
          backgroundPosition: "50% -100px",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="container mx-auto py-20 relative z-10">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {/* Course Count */}
            <div className="funfact flex flex-col items-center">
              <i className="fa fa-book text-[#3498db] text-5xl"></i>
              <h2 className="counter text-white text-4xl font-bold mt-4" data-target="18">
                0
              </h2>
              <h5 className="text-white uppercase font-medium">+ Courses</h5>
            </div>

            {/* Students Count */}
            <div className="funfact flex flex-col items-center">
              <i className="fa fa-users text-[#3498db] text-5xl"></i>
              <h2 className="counter text-white text-4xl font-bold mt-4" data-target-students="2000">
                0
              </h2>
              <h5 className="text-white uppercase font-medium">+ Students</h5>
            </div>

            {/* Faculty Count */}
            <div className="funfact flex flex-col items-center">
              <i className="fa fa-chalkboard-teacher text-[#3498db] text-5xl"></i>
              <h2 className="counter text-white text-4xl font-bold mt-4" data-target="30">
                0
              </h2>
              <h5 className="text-white uppercase font-medium">+ Faculty</h5>
            </div>

            {/* Year of Establishment */}
            <div className="funfact flex flex-col items-center">
              <i className="fa fa-building text-[#3498db] text-5xl"></i>
              <h2 className="counter text-white text-4xl font-bold mt-4" data-target="70">
                0
              </h2>
              <h5 className="text-white uppercase font-medium">+ Years of Establishment</h5>
            </div>
          </div>
        </div>
      </section>

      <section data-aos="fade-up"
        className="flex flex-col lg:flex-row items-center justify-between p-10 container mx-auto space-y-8 lg:space-y-0 ">
        {/* Left side: Principal's Message */}
        <div className="w-full lg:w-1/2 pr-8 text-center lg:text-left ">
          <h2 className="text-[23px] lg:text-4xl font-bold  mb-4 font-sans text-secondary "><span className='text-primary'>Principal</span> Message</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to our Government Polytechnic College. Our mission is to provide quality education
            and prepare students to meet the challenges of the modern world. We are committed to academic
            excellence, innovation, and a holistic approach to personal development. We believe in shaping
            future leaders who will make a difference in society.
          </p>
        </div>

        {/* Right side: Image */}
        <div className="w-full lg:w-1/3 p-4 text-center">
          <div className="">
            <img
              alt="Shri Sanjeev Kumar Singh"
              src="https://gptcvanavasi.co.in/userfiles/JAG_4879(4).jpg"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
            <div className="content border-b-2 border-b-primary border-theme-color-2 p-4 bg-sec mt-2">
              <h4 className="name text-2xl font-semibold text-text mt-0">
                Mr. N. JAGADEESAN
              </h4>
              <p className="mb-4 text-lg">Principal</p>
            </div>
          </div>
        </div>
      </section>

      <section data-aos="fade-up"
        className="mt-12 p-6 w-full bg-gray-50 pb-10 ">
        <div className='container mx-auto'>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-primary mb-4 font-sans">Our <span className='text-secondary'>Facilities</span></h2>
            <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
              At Government Polytechnic College, Vanavasi, we are committed to providing our students with the best infrastructure and facilities to support their academic and extracurricular activities. Our campus is equipped with state-of-the-art amenities to foster an environment conducive to learning and personal growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Classrooms */}
            <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
              <h3 className="text-xl font-bold text-primary mb-2">Classrooms</h3>
              <p className="text-gray-600">
                Our classrooms are spacious, well-ventilated, and equipped with modern teaching aids like projectors and smart boards. These are designed to provide an interactive and comfortable learning experience for students.
              </p>
            </div>

            {/* Laboratories */}
            <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
              <h3 className="text-xl font-bold text-primary mb-2">Laboratories</h3>
              <p className="text-gray-600">
                We offer fully equipped laboratories for various branches of engineering, including Electrical, Electronics, Civil, Mechanical, and Computer Science. These labs provide hands-on experience with the latest tools and technologies.
              </p>
            </div>

            {/* Library */}
            <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
              <h3 className="text-xl font-bold text-primary mb-2">Library</h3>
              <p className="text-gray-600">
                The college library is stocked with a vast collection of books, journals, research papers, and online resources to support the academic needs of our students and faculty. We also provide a quiet and peaceful space for reading and study.
              </p>
            </div>

            {/* Wi-Fi and Computer Lab */}
            <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
              <h3 className="text-xl font-bold text-primary mb-2">Wi-Fi and Computer Lab</h3>
              <p className="text-gray-600">
                Our campus is equipped with high-speed internet and a computer lab with the latest computers and software, allowing students to access online learning resources and enhance their technical skills.
              </p>
            </div>

            {/* Hostel Facilities */}
            <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
              <h3 className="text-xl font-bold text-primary mb-2">Hostel Facilities</h3>
              <p className="text-gray-600">
                We provide separate hostel facilities for both male and female students with all the necessary amenities, including comfortable rooms, 24/7 security, and a homely atmosphere.
              </p>
            </div>

            {/* Sports and Recreation */}
            <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
              <h3 className="text-xl font-bold text-primary mb-2">Sports and Recreation</h3>
              <p className="text-gray-600">
                Our campus boasts outdoor sports facilities such as a football ground, basketball court, and volleyball court. Indoor sports facilities like table tennis and chess are also available for students to unwind and maintain physical fitness.
              </p>
            </div>

            {/* Cafeteria */}
            <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
              <h3 className="text-xl font-bold text-primary mb-2">Cafeteria</h3>
              <p className="text-gray-600">
                The college cafeteria serves a variety of healthy and nutritious food options to keep students energized throughout the day. It is a great place for students to socialize and relax.
              </p>
            </div>

            {/* Auditorium */}
            <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
              <h3 className="text-xl font-bold text-primary mb-2">Auditorium</h3>
              <p className="text-gray-600">
                The college auditorium is a state-of-the-art facility, ideal for hosting seminars, workshops, conferences, cultural events, and student activities.
              </p>
            </div>

            {/* Health Center */}
            <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
              <h3 className="text-xl font-bold text-primary mb-2">Health Center</h3>
              <p className="text-gray-600">
                A fully equipped health center is available on campus to cater to the medical needs of students and staff. We ensure the well-being of our students with first-aid facilities and a trained nurse on call.
              </p>
            </div>

            {/* Transportation */}
            <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
              <h3 className="text-xl font-bold text-primary mb-2">Transportation</h3>
              <p className="text-gray-600">
                We provide transportation facilities for students and staff from various parts of the city, ensuring easy and safe commute to the campus.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section data-aos="fade-up"
        className="relative bg-cover bg-center pt-16 pb-28 w-full opacity-90"
        style={{
          backgroundImage:
            "url('https://gplucknow.co.in/public/user/assets/images/bg/bg1.jpg')",
          backgroundPosition: '50% -2961px',
        }}
      >
        <div className="container mx-auto px-4 py-16">
          {/* Section Content */}
          <div className="section-content">
            <div className="section-title">
              <div className="flex">
                <div className="w-full md:w-2/3">
                  <h2 className="mt-0 text-2xl md:text-4xl font-semibol leading-tight text-primary">
                    STUDENT <span className="text-theme-color-2 font-normal text-secondary">INFORMATION SYSTEM</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <div className="w-full">
                <h3 className="text-white font-sans text-left text-sm md:text-base font-light mt-0 mb-6">
                  This section will deal with all the information pertaining to a student such as personal, academic as well as digital document and student report.
                </h3>
                <Link to='/Signup'
                  className="bg-primary text-theme-color-2 font-semibold text-lg px-6 py-3 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-theme-color-2 hover:text-white mt-4 mb-6 inline-block"
                >
                  Sign in →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
};

export default Home;
