import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    Cpu: null,
    Motherboard: null,
    Ram: null,
    Psu: null,
    Sd: null,
    Monitor: null,
    keyboard: null,
    Mouse: null,
};

export const pcBuilderSlice = createSlice({
    name: "pcBuilder",
    initialState,
    reducers: {
        addCpu: (state, action) => {
            console.log('21',action.payload);
            return { ...state, Cpu: action.payload };
        },
        addMotherboard: (state, action) => {
            return { ...state, Motherboard: action.payload };
        },
        addRam: (state, action) => {
            return { ...state, Ram: action.payload };
        },
        addPsu: (state, action) => {
            return { ...state, Psu: action.payload };
        },
        addSdCard: (state, action) => {
            return { ...state, Sd: action.payload };
        },
        addMonitor: (state, action) => {
            return { ...state, Monitor: action.payload };
        },
        addKeyboard: (state, action) => {
            return { ...state, Keyboard: action.payload };
        },
        addMouse: (state, action) => {
            return { ...state, Mouse: action.payload };
        },
        removeAll: () => {
            return { processor: null, motherboard: null, ram: null, psu: null, sdCard: null, monitor: null };
        },
    },
});

export const { addCpu, addMotherboard, addRam, addPsu, addSdCard,addKeyboard, addMonitor,addMouse, removeAll } = pcBuilderSlice.actions;



export default pcBuilderSlice.reducer;