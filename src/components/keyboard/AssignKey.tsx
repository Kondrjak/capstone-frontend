import React, {useState} from 'react';
import Keyboard from "react-simple-keyboard"
import "react-simple-keyboard/build/css/index.css";

type Props = {
    newKey: string,
    keyLayout: { default: string[], shift: string[] },
    setKeyLayout: React.Dispatch<React.SetStateAction<{ default: string[], shift: string[] }>>,
    showKeyboard: any
}
export default function AssignKey({newKey, keyLayout, setKeyLayout, showKeyboard}: Props) {
    const [layoutSwitch, setLayoutSwitch] = useState("default")

    function findAndReplace(buttonPressed: string) {
        if (layoutSwitch === "default" || layoutSwitch === "shift") {
            const layoutInFocus = keyLayout[layoutSwitch]
            const newLayoutInFocus: string[] = layoutInFocus
                .map(keyLine => keyLine.split(" ")
                    .map(key => key === buttonPressed ? newKey : key).join(" ")
                )
            const newLayout = {
                default: (layoutSwitch === "default"
                        ?
                        newLayoutInFocus
                        :
                        keyLayout["default"]
                ),
                shift: (layoutSwitch === "shift"
                    ?
                    newLayoutInFocus
                    :
                    keyLayout["shift"])
            }
            setKeyLayout(newLayout)
            //todo: make keyboard slowly disappear showKeyboard(false)
        }
    }

    function onKeyPress(button: string) {
        if (button === "{shift}" || button === "{lock}") handleShift()
        else {
            findAndReplace(button)

        }
    }

    function handleShift() {
        setLayoutSwitch(
            layoutSwitch === "default" ? "shift" : "default",
        );
    }

    return (
        <Keyboard
            layoutName={layoutSwitch}
            layout={keyLayout}
            onChange={findAndReplace}
            onKeyPress={onKeyPress}
        />
    )
}