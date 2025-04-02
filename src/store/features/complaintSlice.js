import { createSlice } from "@reduxjs/toolkit";

const complaintSlice = createSlice({
    name: "complaints",
    initialState: [],
    reducers: {
        addComplaint: (state, action) => {
            state.push(action.payload);
        },
        removeComplaint: (state, action) => {
            return state.filter(complaint => complaint.id !== action.payload);
        }
    }
});

export const { addComplaint, removeComplaint } = complaintSlice.actions;
export default complaintSlice.reducer;
