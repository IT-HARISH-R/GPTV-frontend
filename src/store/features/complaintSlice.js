import { createSlice } from "@reduxjs/toolkit";

const complaintSlice = createSlice({
    name: "complaints",
    initialState: {
        complaint: null,
    },
    reducers: {
        addComplaint: (state, action) => {

            state.complaint = action.payload

        },
        // removeComplaint: (state, action) => {
        //     return state.filter(complaint => complaint.id !== action.payload);
        // }
    }
});

export const { addComplaint, removeComplaint } = complaintSlice.actions;
export default complaintSlice.reducer;
