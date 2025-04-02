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
        },
        setComplaints: (state, action) => {
            return action.payload; 
        }
    }
});

export const { addComplaint, removeComplaint, setComplaints } = complaintSlice.actions;

export const selectComplaints = state => state.complaints;

export default complaintSlice.reducer;
