import instance from "./axios";

const baseURL = 'http://localhost:3000/api/v1'

const galleryServices = {
    uplode: async (formData) => {
        return await instance.post(`${baseURL}/gallery/upload-multiple`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            timeout: 20000, 
            // withCredentials: true,
        });
    }
}

export default galleryServices;
