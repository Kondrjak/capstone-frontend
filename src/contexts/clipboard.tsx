import React from "react";
import {createContext} from "react";
import useRevolver from "../hooks/Revolver";
import useBin from "../hooks/PasteBin";
import {Drawer} from "@mui/material";
import Write from "../components/keyboard/Write";

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
    return null /*(<Drawer
        anchor="bottom"
        open={isKeyboardShown}
        onClose={toggleDrawer(false)}
    >
        <Write/>
    </Drawer>);*/
}

export default function ClipboardProvider({children}: Props) {
    const {selectedChamber, deleteChamber, inChamberFindAndReplace, addChamber, cycle, /*setRevolver*/} = useRevolver(exampleRevolver);
    const {shiftLeft, shiftRight, pasteInto, pasteFrom, /*clear*/} = useBin()
    return (
        <Clipboard.Provider value={{selectedChamber, deleteChamber, inChamberFindAndReplace, addChamber, cycle,
        shiftLeft, shiftRight, pasteInto, pasteFrom}}>
            <PasteBinDrawer/>
            <KeyManagerDrawer/>
            {children}
        </Clipboard.Provider>
    )
}