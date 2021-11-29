import React from "react";
import {createContext} from "react";
import useRevolver from "../hooks/useRevolver";
import useBin from "../hooks/pasteToBin";
import {Drawer} from "@mui/material";
//import {Drawer} from "@mui/material";
//import WriteWithRevolver from "../components/keyboard/WriteWithRevolver";

export const Clipboard = createContext({})

export const exampleRevolver = [[
    '1 2 3 {bksp}',
    '4 5 6 {enter}',
    '7 8 9 0 {space}',
],[
    'q w e r t z u i o p ü {bksp}',
    'a s d f g h j k l ö ä {enter}',
    'y x c v b n m , . - " {space}',
]]

type Props = { children: any}

function PasteBinDrawer() {
    return null;
}

function KeyManagerDrawer() {
    return (<Drawer
        anchor="bottom"
        //open={isKeyboardShown}
        //onClose={toggleDrawer(false)}
    >
        test
    </Drawer>)
}

export default function ClipboardProvider({children}: Props) {
    const {selectedChamber, deleteChamber, addChamber, /*setRevolver*/} = useRevolver(exampleRevolver);
    const {shiftLeft, shiftRight, pasteInto, pasteFrom, /*clear*/} = useBin()
    return (
        <Clipboard.Provider value={{selectedChamber, deleteChamber, addChamber,
        shiftLeft, shiftRight, pasteInto, pasteFrom}}>
            <PasteBinDrawer/>
            <KeyManagerDrawer/>
            {children}
        </Clipboard.Provider>
    )
}