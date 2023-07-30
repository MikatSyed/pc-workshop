import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    cpu: null,
    motherboard: null,
    ram: null,
    psu: null,
    sd: null,
    monitor: null,
    keyboard: null,
    mouse: null,
};

export const pcBuilderSlice = createSlice({
    name: "pcBuilder",
    initialState,
    reducers: {
        addCpu: (state, action) => {
            return { ...state, cpu: action.payload };
        },
        addMotherboard: (state, action) => {
            return { ...state, motherboard: action.payload };
        },
        addRam: (state, action) => {
            return { ...state, ram: action.payload };
        },
        addPsu: (state, action) => {
            return { ...state, psu: action.payload };
        },
        addSdCard: (state, action) => {
            return { ...state, sd: action.payload };
        },
        addMonitor: (state, action) => {
            return { ...state, monitor: action.payload };
        },
        addKeyboard: (state, action) => {
            return { ...state, keyboard: action.payload };
        },
        addMouse: (state, action) => {
            return { ...state, mouse: action.payload };
        },
        removeAll: () => {
            return { processor: null, motherboard: null, ram: null, psu: null, sdCard: null, monitor: null };
        },
    },
});

export const { addCpu, addMotherboard, addRam, addPsu, addSdCard,addKeyboard, addMonitor,addMouse, removeAll } = pcBuilderSlice.actions;

export const selectCount = (state) => state.pcBuilder;

export default pcBuilderSlice.reducer;