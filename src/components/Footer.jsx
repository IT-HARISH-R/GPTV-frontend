const Footer = () => {
  return (
    <footer  className="bg-gray-900 w-full text-gray-300 py-8 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-yellow-400">
          Government Polytechnic College, Vanavasi
        </h2>
        <p className="text-sm md:text-base mt-1 text-gray-400">
          Salem District, Tamil Nadu - 636457
        </p>

        <div className="mt-4 text-sm space-y-1">
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          <p className="text-gray-400">Designed & Developed by <span className="text-white font-semibold">Harish</span></p>
        </div>

        <div className="mt-4 text-sm">
          <p>📞 04298-266177 &nbsp; | &nbsp; 📧 <a href="mailto:gptcvanavasi@gmail.com" className="text-yellow-400 hover:underline">gptcvanavasi@gmail.com</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
