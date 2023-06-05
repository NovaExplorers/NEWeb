import { createSlice } from "@reduxjs/toolkit"
import _ from "lodash";

const initialState = {
    battery: {
        /*
            Status
                Inactive
                In use
                Charging
        */
        status: 'Inactive',
        remaining: {
            percentage: 60,
            mah: 2500,
            data: [
                { time: 1685976031, data: 20 },
                { time: 1685976031, data: 50 },
                { time: 1685976031, data: 60 },
                { time: 1685976031, data: 30 },
                { time: 1685976031, data: 20 },
                { time: 1685976031, data: 10 },
            ]
        },
        capacity: {
            mah: 3000,
        },
        voltage: {
            volts: NaN,
            data: [
                { time: 1685976031, data: NaN }
            ] 
        },
        amperage: {
            amps: NaN,
            data: [
                { time: 1685976031, data: NaN }
            ] 
        }
    },
    cellular: {
        signal: {
            percentage: 85,
            data: [
                { time: 1685976031, data: NaN }
            ] 
        },
        connectivity: {
            generation: 'LTE',
            data: [
                { time: 1685976031, data: 'GSM' }
            ] 
        },
        dataPlan: {
            currentPlan: 'Forfait Liberté 99 DHS',
            carrier: 'Itttisalat-Al Maghrib',
            used: NaN,
            available: NaN,
            percentage: NaN,
        },
        dataConsumption: {
            sessionTime: NaN,
            consumedDataSession: NaN,
            consumedDataSessionData: [
                { time: 1685976031, data: NaN }
            ]
        }
    },
    gsmRepeater: {
        /*
            Status
                0 -> Inactive
                1 -> Active
        */ 
        status: 0,
        signalStrength: NaN,
        signalStrengthData: [
            { time: 1685976031, data: 'GSM' }
        ],
        transmittingStrengthMW: NaN
    },
    internet: {
        ethernetStatus: 0,
        wifi: {
            status: 0,
            connectedClients: 1
        },
        downloadSpeed: {
            time: 1685976031,
            value: NaN
        },
        uploadSpeed: {
            time: 1685976031,
            value: NaN
        },
        ping: NaN
    },
    drone: {
        model: 'No model set',
        modelImage: 'https://fastly.picsum.photos/id/1052/200/200.jpg',
        battery: {
            percentage: NaN, 
            data: [
                { time: 1685976031, data: NaN }
            ],
        },
        altitude: NaN,
        pressure: NaN,
        // geoCords: ['lat', 'long']
        geoCords: [NaN, NaN]
    }
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setValue: (state, action) => {
            _.set(state, action.payload.key, action.payload.value);
        }
    }
});

export const { setValue } = dataSlice.actions;
export default dataSlice.reducer;