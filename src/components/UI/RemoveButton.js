import { addCpu, addKeyboard, addMonitor, addMotherboard, addMouse, addPsu, addRam, addSdCard } from '@/redux/features/PcBuildSlice';
import { Button } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';

const RemoveButton = ({category}) => {
    console.log(category);
    const dispatch = useDispatch();

    const removeToBuilder = () => {
        console.log(category);
        switch (category) {
            case "Cpu":
                dispatch(addCpu(null));
                break;
            case "Motherboard":
                dispatch(addMotherboard(null));
                break;
            case "Ram":
                dispatch(addRam(null));
                break;
            case "Psu":
                dispatch(addPsu(null));
                break;
            case "Sd":
                dispatch(addSdCard(null));
                break;
            case "Monitor":
                dispatch(addMonitor(null));
                break;
            case "Keyboard":
                dispatch(addKeyboard(null));
                break;
            case "Mouse":
                dispatch(addMouse(null));
                break;
        }
    };
    
    return (
        <div>
            <Button danger onClick={removeToBuilder}>Remove</Button>
        </div>
    );
};

export default RemoveButton;