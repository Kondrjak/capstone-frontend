import React, {useRef, useState} from 'react';
import Keyboard from "react-simple-keyboard"
import "react-simple-keyboard/build/css/index.css";

const myLayout = {
    layout: {
        'default': [
            '` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
            '{tab} q w e r t y u i o p [ ] \\',
            '{lock} a s d f g h j k l ; \' {enter}',
            '{shift} z x c v b n m , . / {shift}',
            '.com @ {space}'
        ],
        'shift': [
            '~ ! @ # $ % ^ & * ( ) _ + {bksp}',
            '{tab} Q W E R T Y U I O P { } |',
            '{lock} A S D F G H J K L : " {enter}',
            '{shift} Z X C V B N M < > ? {shift}',
            '.com @ {space}'
        ]
    }
}

type Props = {
}
export default function Write(props: Props) {
const keyboardRef = useRef(null)
    const [input, setInput] = useState("")
    const [layout, setLayout] = useState("default")

    function onChange(writtenText: any) {
        setInput(writtenText);
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
    }
    return (
        <div>
            <input
                value={input}
                placeholder={"Tap on the virtual keyboard to start"}
                onChange={onChangeInput}
            />
            <Keyboard
                keyboardRef={ref=> keyboardRef.current = ref}
                layoutName={layout}
                layout={myLayout.layout}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
        </div>
    )
}