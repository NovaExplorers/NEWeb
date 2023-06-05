import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./user.state";
import deviceSliceReducer from "./device.state";
import uiSliceReducer from "./ui.state";
import dataSliceReducer from "./data.state";

export const store = configureStore({
    reducer: {
        user: userSliceReducer,
        device: deviceSliceReducer,
        ui: uiSliceReducer,
        data: dataSliceReducer
    }
})