import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./user.state";
import deviceSliceReducer from "./device.state";

export const store = configureStore({
    reducer: {
        user: userSliceReducer,
        device: deviceSliceReducer
    }
})