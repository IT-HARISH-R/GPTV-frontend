import React, { useEffect } from 'react';
import '../App.css'

const Home = () => {
  useEffect(() => {
    const counters = document.querySelectorAll('.counter');
    const options = {
      rootMargin: '0px 0px -50px 0px', // Adjusts the trigger point
      threshold: 0.5, // When 50% of the element is visible
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const updateCount = () => {
            let target = +el.getAttribute('data-target');
            let count = +el.innerText;
            if (count < target) {
              el.innerText = count + 1;
              setTimeout(updateCount, 30);
            }
          };
          updateCount();
          observer.unobserve(el); // Stop observing after the animation starts
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    counters.forEach(counter => observer.observe(counter));

    // Cleanup observer when the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);
  useEffect(() => {
    const counters = document.querySelectorAll('.counter');
    const options = {
      rootMargin: '0px 0px -50px 0px', // Adjusts the trigger point
      threshold: 0.5, // When 50% of the element is visible
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const updateCount = () => {
            let target = +el.getAttribute('data-target-st');
            let count = +el.innerText;
            if (count < target) {
              el.innerText = count + 10;
              setTimeout(updateCount, 1);
            }
          };
          updateCount();
          observer.unobserve(el); // Stop observing after the animation starts
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    counters.forEach(counter => observer.observe(counter));

    // Cleanup observer when the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('.scroll-animate');
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
    <div className="min-h-screen flex flex-col justify-center items-center">
      {/* Welcome Section with Background Image */}
      <section className="relative w-full h-screen bg-cover bg-center scroll-animate" style={{
        backgroundImage: `url(https://www.mymathews.com/media/institute_banner/Government_Polytechnic_College_Vanavasi_BANNER.JPG)`
      }}>
        <div className="absolute inset-0 bg-black opacity-40"></div> {/* Increased opacity for better contrast */}
        <div className="flex justify-center items-center w-full h-full text-center text-white relative z-10">
          <div>
            <h1 className="text-4xl font-semibold mb-4 font-sans">
              Welcome to Government Polytechnic College, Vanavasi, Salem
            </h1>
            <p className="text-lg mb-6">
              Empowering students with knowledge, skills, and a bright future.
            </p>
            <button className="bg-primary text-white py-2 px-6 rounded-lg hover:bg-secondary transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 py-12 px-6 w-full scroll-animate">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl font-semibold text-primary mb-4">
              About <span className="text-secondary">College</span>
            </h2>
            <h3 className="text-2xl font-semibold text-primary mb-2">
              Welcome to <span className="text-secondary">GPC, Vanavasi</span>
            </h3>
            <p className="text-lg text-[#4f343a] mb-6 leading-relaxed">
              Government Polytechnic College, Vanavasi, Salem is committed to providing world-class education that empowers students to become the next generation of leaders, engineers, and technologists. Our comprehensive range of specialized courses equips students with the knowledge and skills needed to excel in their careers and contribute to the advancement of society.
            </p>
            <p className="text-lg text-gray-700 mb-5">
              A place where knowledge meets innovation. Join us in shaping a brighter future through high-quality education and hands-on learning experiences.
            </p>
            <button className="bg-primary text-white py-2 px-6 rounded-lg hover:bg-secondary transition duration-300">
              Know More
            </button>
          </div>

          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <img
              src="https://lh5.googleusercontent.com/p/AF1QipMsPAfvd0RNlcub0CfvdEgnuSb4jbX7OjHNos5W=w408-h293-k-no"
              alt="College Image"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="bt-12 w-full p-6 scroll-animate bg-gray-50">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-primary mb-4">Our Courses</h2>
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
      <section className="relative w-full bg-cover bg-center scroll-animate" style={{
        backgroundImage: `url(https://gplucknow.co.in/public/user/assets/images/bg/bg2.jpg)`,
        backgroundPosition: '50% -100px',
        backgroundAttachment: 'fixed',
      }}>
        <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay for better text visibility */}
        <div className="container mx-auto py-20">
          <div className="flex flex-wrap justify-between">
            <div className="w-full sm:w-1/2 md:w-1/4 text-center mb-12 lg:mb-0">
              <div className="funfact">
                <i className="fa fa-chalkboard-teacher mt-5 text-[#3498db] text-5xl"></i>
                <h2 className="counter text-white text-4xl font-bold mt-4" data-target="18">0</h2>
                <h5 className="text-white text-uppercase font-medium">+ Courses</h5>
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/4 text-center mb-12 lg:mb-0">
              <div className="funfact">
                <i className="fa fa-chalkboard-teacher mt-5 text-[#3498db] text-5xl"></i>
                <h2 className="counter text-white text-4xl font-bold mt-4" data-target-st="2000">0</h2>
                <h5 className="text-white text-uppercase font-medium">+ Students</h5>
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/4 text-center mb-12 lg:mb-0">
              <div className="funfact">
                <i className="fa fa-chalkboard-teacher mt-5 text-[#3498db] text-5xl"></i>
                <h2 className="counter text-white text-4xl font-bold mt-4" data-target="30">0</h2>
                <h5 className="text-white text-uppercase font-medium">+ Faculty</h5>
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/4 text-center mb-12 lg:mb-0">
              <div className="funfact">
                <i className="fa fa-chalkboard-teacher mt-5 text-[#3498db] text-5xl"></i>
                <h2 className="counter text-white text-4xl font-bold mt-4" data-target="70">0</h2>
                <h5 className="text-white text-uppercase font-medium">+ Year of Establishment</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row items-center justify-between p-10 container mx-auto space-y-8 lg:space-y-0 scroll-animate">
        {/* Left side: Principal's Message */}
        <div className="w-full lg:w-1/2 pr-8 text-center lg:text-left ">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-sans"><span className='text-text'>Principal</span> Message</h2>
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
            <div className="content border-b-2 border-b-secondary border-theme-color-2 p-4 bg-sec mt-2">
              <h4 className="name text-2xl font-semibold text-text mt-0">
                Mr. N. JAGADEESAN
              </h4>
              <p className="mb-4 text-lg">Principal</p>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Home;
