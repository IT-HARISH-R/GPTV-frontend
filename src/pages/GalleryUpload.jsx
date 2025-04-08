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
      return toast.error("Please fill out all fields before uploading.");
    }

    const formData = new FormData();
    imageFields.forEach((item) => {
      formData.append("imageNames", item.name);
      formData.append("images", item.file);
    });

    try {
      const res = await galleryServices.uplode(formData);
      toast.success("Images uploaded successfully!");
      setImageFields([{ name: "", file: null }]);
    } catch (err) {
      console.error(err);
      toast.error("Upload failed!");
    }
  };

  return (
    <section className="bg-gray-100 px-4 py-10">
      <ToastContainer position="top-center" autoClose={2000} />
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-6 space-y-8 transition-all">
        <h1 className="text-center text-3xl font-semibold text-gray-800">
          📁 College Gallery Uploader
        </h1>

        {imageFields.map((field, index) => (
          <div
            key={index}
            className="relative p-5 border border-gray-200 rounded-xl bg-gray-50 shadow-sm"
          >
            <button
              onClick={() => removeField(index)}
              title="Remove"
              className="absolute top-2 right-3 text-red-500 hover:text-red-700 font-bold text-lg"
            >
              ×
            </button>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Image Title
              </label>
              <input
                type="text"
                placeholder="Ex: Independence Day Event"
                value={field.name}
                onChange={(e) =>
                  handleInputChange(index, "name", e.target.value)
                }
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Upload Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  handleInputChange(index, "file", e.target.files[0])
                }
                className="w-full border border-gray-300 p-2 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
              />
            </div>
          </div>
        ))}

        <div className="flex justify-between flex-wrap items-center gap-4">
          <button
            onClick={addNewField}
            className="bg-gray-700 hover:bg-gray-800 text-white px-5 py-2 rounded-lg transition"
          >
            ➕ Add Another
          </button>
          <button
            onClick={handleUpload}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
          >
            🚀 Upload All Images
          </button>
        </div>
      </div>
    </section>
  );
};

export default GalleryUpload;
