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
            volts: 19.2,
            data: [
                { time: 1685976031, data: 12.9 },
                { time: 1685976053, data: 20.3}
            ] 
        },
        amperage: {
            amps: 4,
            data: [
                { time: 1685976033, data: 2 },
                { time: 1685976031, data: 5 },
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
            carrier: 'Ittisalat-Al Maghrib',
            used: 3,
            available: 10,
            percentage: 30,
        },
        dataConsumption: {
            sessionTime: 600000,
            consumedDataSession: 2.459
        }
    },
    lteRepeater: {
        /*
            Status
                0 -> Inactive
                1 -> Active
        */ 
        status: 0,
        signalStrength: 200,
        transmittingStrengthMW: 10
    },
    internet: {
        ethernetStatus: 0,
        wifi: {
            status: 0,
            connectedClients: 1
        },
        downloadSpeed: {
            time: 1685976031,
            value: 12
        },
        uploadSpeed: {
            time: 1685976031,
            value: 2
        },
        ping: 105
    },
    drone: {
        model: 'dji Matrice 300 RTK',
        modelImage: 'https://dji-official-fe.djicdn.com/cms/uploads/b69ea2fb26bb9391c6f5600608d4f5d6.png',
        battery: {
            percentage: 27, 
        },
        altitude: 200,
        pressure: 1089,
        // geoCords: ['lat', 'long']
        geoCords: [35.7517268, -5.9104553]
    }
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setValue: (state, action) => {
            _.set(state, action.payload.key, action.payload.value);
            if(['cellular.dataPlan.used', 'cellular.dataPlan.available'].includes(action.payload.key)) {
                state.cellular.dataPlan.percentage = state.cellular.dataPlan.used * 100 / state.cellular.dataPlan.available;
            }
        }
    }
});

export const { setValue } = dataSlice.actions;
export default dataSlice.reducer;