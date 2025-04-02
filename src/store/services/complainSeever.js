import instance from "./axios";


const complainSeever = {
    fileComplaint: async (data) => {
        return await instance.post('/complaints', data);
    },
    getComplaints: async () => {
        return await instance.get('/complaints');
    },

}

export default complainSeever;