import React from 'react';
import Keyboard from "react-simple-keyboard"
import "react-simple-keyboard/build/css/index.css";
import Backdrop from "@mui/material/Backdrop";

type Props = {
    newKey: string,
    keyLayout: { default: string[] },
    setKeyLayout: React.Dispatch<React.SetStateAction<{ default: string[] }>>,
    show: boolean
}
export default function LayoutToPasteBackdrop({newKey, keyLayout, setKeyLayout, show}: Props) {

    function findAndReplace(buttonPressed: string) {
        const layout = keyLayout["default"]
        const newLayoutInFocus: string[] = layout
            .map(keyLine => keyLine.split(" ")
                .map(key => key === buttonPressed ? newKey : key).join(" ")
            )
        const newLayout = {
            default: newLayoutInFocus
        }
        setKeyLayout(newLayout)
    }

    const [showInfo, setShowInfo] = React.useState(show);

    return (
        <Backdrop
            sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
            open={showInfo}
            onClick={() => setShowInfo(false)}
        >
            <Keyboard
                layoutName={"default"}
                layout={keyLayout}
                onChange={findAndReplace}
                //onKeyPress={}
            />
        </Backdrop>
    )
}