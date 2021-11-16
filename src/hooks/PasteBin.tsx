import {useState} from "react";
import {FocusList} from "../utils/FocusList";

export default function useBin(){
    const [focus, setFocus] = useState(0);
    const initialSymbols: string[] = []
    const [symbols, setSymbols] = useState(initialSymbols)
    let focusList = new FocusList<string>(symbols, focus)

    function shiftLeft(){
        focusList.shiftFocusLeft()
        setFocus(focusList.getFocus())
    }

    function shiftRight(){
        focusList.shiftFocusRight()
        setFocus(focusList.getFocus())
    }

    function pasteInto(symbol:string){
        focusList.insertAtFocus(symbol)
        setSymbols(focusList.getContent())
    }

    function pasteFrom(){
        return focusList.getItemInFocus()
    }

    return {shiftLeft, shiftRight, pasteInto, pasteFrom}
}