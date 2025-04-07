import instance from "./axios";


const authServices = {
    register: async (data) => {
        return await instance.post('/register', data);
    },
    login: async (data) => {


        return await instance.post('/login', data);
    },
    logout: async () => {

        // const dispatch = useDispatch()
        // const token = localStorage.clear('token');
        // console.log(token)
        // dispatch(setUser(null))


        // return await instance.get('/logout');
    },
    me: async () => {

        return await instance.get('/me');
    },
    createEmployee: async(data)=>{
        return await instance.post('/createEmployee',data)
    }
}

export default authServices;