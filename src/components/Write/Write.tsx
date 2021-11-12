import React, {useState} from 'react';
import Keyboard from "react-simple-keyboard"
import "react-simple-keyboard/build/css/index.css";

type Props = {
}
export default function Write(props: Props) {

    const [input, setInput] = useState("")
    const [layout, setLayout] = useState("default")

    function onChange(input: any) {
        setInput(input);
    }

    function onKeyPress(button: any) {
        if (button === "{shift}" || button === "{lock}") handleShift();
    }

    function handleShift() {
        setLayout(
            layout === "default" ? "shift" : "default",
        );
    }

    function onChangeInput(event:any) {
        setInput(event.target.value)
        //keyboard.setInput(input);
    }
    return (
        <div>
            <input
                value={input}
                placeholder={"Tap on the virtual keyboard to start"}
                onChange={onChangeInput}
            />
            <Keyboard
                layoutName={layout}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
        </div>
    )
}