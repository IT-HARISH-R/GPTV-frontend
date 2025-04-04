import { useEffect, useState } from "react";
import galleryServices from "../store/services/galleryServices";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await galleryServices.getGallery();
        console.log(res.data);
        setImages(res.data); // API returns [{ imageName, imageUrl }]
      } catch (err) {
        console.error("Error fetching gallery:", err);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center font-sans mb-6 text-blue-700">
        <span className="text-primary"> College </span> Gallery
      </h2>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={img.imageUrl}
              alt={img.imageName}
              className="w-full h-48 object-cover cursor-pointer transition-transform hover:scale-105"
              onClick={() => setSelectedImage(img.imageUrl)}
            />
            <div className="bg-white bg-opacity-90 px-3 py-2 mt-2 rounded-md text-center text-sm font-semibold text-blue-800 shadow-md">
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
      {
        selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
            <img
              src={selectedImage}
              alt="Preview"
              className="max-w-full max-h-full rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
          </div>
        )
      }
    </div >
  );
};

export default Gallery;
