import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    _id: '',
    name: '',
    hostname: '',
    port: '',
    userAccess: []
}

export const deviceSlice = createSlice({
    name: 'device',
    initialState,
    reducers: {
        setObj: (state, action) => {
            Object.entries(action.payload).forEach(([k, v]) => {
                state[k] = v;
            })
        }
    }
});

export const { setObj } = deviceSlice.actions;
export default deviceSlice.reducer;