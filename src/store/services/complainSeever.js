import instance from "./axios";


const complainSeever = {
    fileComplaint: async (data) => {
        return await instance.post('/complaints', data);
    },
    getComplaints: async () => {
        return await instance.get('/complaints');
    },
    deletebyid: async (id) => {
        return await instance.delete(`/delete/${id}`);
    },

}

export default complainSeever;