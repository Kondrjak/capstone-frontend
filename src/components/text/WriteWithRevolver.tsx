import React, {useState} from 'react';
import Keyboard from "react-simple-keyboard"
import "react-simple-keyboard/build/css/index.css";
import {TextField} from "@mui/material";
import {KeyRevolver} from "../../types/tsTypes";
import useRevolver from "../../hooks/Revolver";

type Props = { layoutRevolver: KeyRevolver }
export default function Write({layoutRevolver}: Props) {

    const [text, setText] = useState("")
    const [caret, setCaret] = useState({start: 0, end: 0, content: ""})
    const {selectedChamber, cycleLeft, cycleRight} = useRevolver(layoutRevolver)

    function saveChange(event: any) {
        setText(event.target.value);
    }

    function saveCaretSelection(event: any) {
        console.log('start: ' + event.target.selectionStart + ', end: ' + event.target.selectionEnd + ', selection: ' + text.slice(event.target.start, event.target.end))
        setCaret({
            start: event.target.selectionStart,
            end: event.target.selectionEnd,
            content: text.slice(event.target.selectionStart, event.target.selectionEnd)
        })
        console.log(caret)
    }

    function onKeyPress(button: string) {
        if (button === "{lock}") cycleRight()
        else if (button === "{shift}") cycleLeft()
        else if (button === "{space}") onKeyPress(" ")
        else if (button === "{enter}") onKeyPress("\n")
        else if (button === "{bksp}") handleBackspace()
        //else if (button === "{copy}") handleCopy()
        //else if (button === "{paste}") handlePaste()
        else typeSymbol(button)

        function handleBackspace() {
            if (caret.content === "") {
                const newCaretPos = caret.start - 1
                setText(text.slice(0, newCaretPos) + text.slice(caret.start, text.length))
                setCaret({start: newCaretPos, end: newCaretPos, content: ""})
            } else {
                setText(text.slice(0, caret.start) + text.slice(caret.end, text.length))
                setCaret({start: caret.start, end: caret.start, content: ""})
            }
        }

        function typeSymbol(symbol: string) {
            setText(text.slice(0, caret.start) + symbol + text.slice(caret.end, text.length))
            const newCaretPos = caret.start + symbol.length
            setCaret({start: newCaretPos, end: newCaretPos, content: ""})
        }
    }

    return (
        <div>
            <TextField
                id={'editorArea'}
                sx={{marginTop: '10px'}}
                label="type unicode"
                focused
                fullWidth
                multiline
                minRows={10}
                maxRows={10}
                value={text}
                onSelect={saveCaretSelection}
                onChange={saveChange}
            />
            <Keyboard
                onKeyPress={onKeyPress}
                layout={selectedChamber()}
                theme={"my-theme"}
            />
        </div>
    )
}