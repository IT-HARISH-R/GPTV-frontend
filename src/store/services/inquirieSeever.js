
import instance from "./axios";

const inquirieSeever = {
  // Create a new inquiry
  inquirie: async (data) => {
    return await instance.post('/inquirie', data);
  },

  // Get all inquiries
  getAll: async () => {
    return await instance.get('/inquirie');
  },

  // Get a single inquiry by ID
  getById: async (id) => {
    return await instance.get(`/inquirie/${id}`);
  },

  // Delete an inquiry by ID
  deleteById: async (id) => {
    return await instance.delete(`/inquirie/${id}`);
  }
};

export default inquirieSeever;
