import { useState } from "react";

const images = [
  { src: "https://gptcvanavasi.co.in/thumbs/gallery/FRONT%20VIEW.jpg", alt: "College Building" },
  { src: "https://gptcvanavasi.co.in/thumbs/gallery/TOP%20VIEW.jpg", alt: "College Building" },
  { src: "https://gptcvanavasi.co.in/thumbs/gallery/womens%20day%20celebration2.jpeg", alt: "Annual Event" },
  { src: "https://gptcvanavasi.co.in/thumbs/gallery/PHYSICS%20LAB.jpg", alt: "Students in Lab" },
  { src: "https://gptcvanavasi.co.in/thumbs/gallery/2.INAUGURATION%20OF%20BADMINTON%20COURT.jpeg", alt: "Sports Event" },
  { src: "https://gptcvanavasi.co.in/thumbs/gallery/Library.jpeg", alt: "Library" },
  { src: "https://gptcvanavasi.co.in/thumbs/gallery/lab2.jpeg", alt: "Workshop" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-6">Gallery</h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.alt}
            className="w-full h-48 object-cover rounded-lg cursor-pointer transition-transform hover:scale-105"
            onClick={() => setSelectedImage(img.src)}
          />
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4">
          <img
            src={selectedImage}
            alt="Enlarged"
            className="max-w-full max-h-full rounded-lg"
          />
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
