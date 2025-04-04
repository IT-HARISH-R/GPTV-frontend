import instance from "./axios";


const authServices = {
    register: async (data) => {
        return await instance.post('/register', data);
    },
    login: async (data) => {

         
    return await instance.post('/login', data);
},
    logout: async () => {
        return await instance.get('/auth/logout');
    },
        me: async () => {
            return await instance.get('/auth/me');
        }
}

export default authServices;