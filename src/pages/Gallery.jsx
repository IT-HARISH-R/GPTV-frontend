import { useEffect, useState } from "react";
import galleryServices from "../store/services/galleryServices";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await galleryServices.getGallery();
        setImages(res.data);
      } catch (err) {
        console.error("Error fetching gallery:", err);
      }
    };

    fetchImages();
  }, []);

  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      setSelectedImage(null);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center font-sans mb-6 text-blue-700">
        <span className="text-primary"> College </span> Gallery
      </h2>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={img.imageUrl}
              alt={img.imageName}
              className="w-full h-48 object-cover cursor-pointer transform hover:scale-105 transition-transform duration-300"
              onClick={() => setSelectedImage(img.imageUrl)}
            />
            <div className="px-4 py-3 text-center font-semibold text-blue-800 text-sm">
              {img.imageName
                .toLowerCase()
                .split(/[\s\-_]+/)
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
            </div>
          </div>
        ))}
      </div>

      {/* Modal Preview */}
      {selectedImage && (
        <div
          className="modal-overlay fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[250] p-4"
          onClick={handleBackgroundClick}
        >
          <div className="relative animate-zoomIn">
            <img
              src={selectedImage}
              alt="Preview"
              className="max-w-[90vw] max-h-[90vh] rounded-lg border-4 border-white shadow-2xl"
            />
            <button
              className="absolute -top-6 -right-6 text-white text-4xl font-bold bg-red-600 rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-red-700 transition"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {/* Zoom Animation */}
      <style>{`
        .animate-zoomIn {
          animation: zoomIn 0.3s ease;
        }

        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default Gallery;
