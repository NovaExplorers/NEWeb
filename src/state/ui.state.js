import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    loader: false
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleLoader: (state) => {
            state.loader = !state.loader;
        },
        setLoader: (state, action)=> {
            state.loader = action.payload;
        }
    }
});

export const { toggleLoader, setLoader } = uiSlice.actions;
export default uiSlice.reducer;