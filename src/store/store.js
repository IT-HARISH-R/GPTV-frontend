import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./features/userSlice";
import userReducer from "./features/userSlice";
import complaintReducer from "./features/complaintSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        complaints: complaintReducer,
    }
});

export default store;