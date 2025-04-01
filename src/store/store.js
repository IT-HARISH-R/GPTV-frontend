import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";

const store = configureStore({
    reducer: {
        // register: registerReducer,
        // login: loginReducer,
        user: userReducer
    }
});

export default store;