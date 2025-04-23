import instance from "./axios";

// const baseURL = 'http://localhost:3000/api/v1'
const baseURL = 'https://gpcv-backend.onrender.com/api/v1'

const galleryServices = {
    uplode: async (formData) => {
        return await instance.post(`${baseURL}/gallery/upload-multiple`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            // timeout: 25000, 
            // withCredentials: true,
        });
    },
    getGallery: async()=>{
        return await instance.get('/gallery');
    }
}

export default galleryServices;
