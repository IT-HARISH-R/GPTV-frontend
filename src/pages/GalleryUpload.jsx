import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import galleryServices from "../store/services/galleryServices";
// import "react-toastify/dist/ReactToastify.css";

const GalleryUpload = () => {
  const [imageFields, setImageFields] = useState([{ name: "", file: null }]);

  const handleInputChange = (index, type, value) => {
    const updated = [...imageFields];
    updated[index][type] = value;
    setImageFields(updated);
  };

  const addNewField = () => {
    setImageFields([...imageFields, { name: "", file: null }]);
  };

  const removeField = (index) => {
    const updated = imageFields.filter((_, i) => i !== index);
    setImageFields(updated.length > 0 ? updated : [{ name: "", file: null }]);
  };

  const handleUpload = async () => {
    if (imageFields.some((f) => !f.name || !f.file)) {
      return toast.error("Please provide a title and file for all images.");
    }

    const formData = new FormData();
    imageFields.forEach((item) => {
      formData.append("imageNames", item.name);
      formData.append("images", item.file);
    });

    try {
      const res = await galleryServices.uplode(formData);
      toast.success("Images uploaded successfully!");
      console.log(res);
      setImageFields([{ name: "", file: null }]);
    } catch (err) {
      console.error(err);
      toast.error("Upload failed!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 to-blue-100 py-10 px-4">
      <ToastContainer position="top-center" autoClose={2000} />
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 space-y-6 animate-fade-in">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-700 mb-4">
          🎓 Upload Images to the College Gallery
        </h1>
        <div className="space-y-6">
          {imageFields.map((field, index) => (
            <div
              key={index}
              className="relative p-4 border rounded-lg bg-blue-50 shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => removeField(index)}
                className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-xl"
                title="Remove"
              >
                ×
              </button>
              <div className="mb-3">
                <label className="block text-sm font-medium mb-1 text-blue-800">
                  Image Title
                </label>
                <input
                  type="text"
                  placeholder="Enter image title"
                  className="w-full border border-blue-300 p-2 rounded focus:outline-none focus:ring focus:border-blue-500"
                  value={field.name}
                  onChange={(e) =>
                    handleInputChange(index, "name", e.target.value)
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-blue-800">
                  Upload Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  className="w-full border border-blue-300 p-2 rounded focus:outline-none"
                  onChange={(e) =>
                    handleInputChange(index, "file", e.target.files[0])
                  }
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-between items-center gap-4 pt-4">
          <button
            onClick={addNewField}
            className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-lg transition-all duration-200"
          >
            ➕ Add New
          </button>

          <button
            onClick={handleUpload}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-all duration-200"
          >
            ⬆️ Upload All
          </button>
        </div>
      </div>
    </div>
  );
};

export default GalleryUpload;
