import React from 'react';
import Keyboard from "react-simple-keyboard"
import "react-simple-keyboard/build/css/index.css";
import {KeyRevolver} from "../../types/tsTypes";
import useRevolver from "../../hooks/Revolver";
import useKeyboardTextareaConnection from "../../hooks/connectKeyboardWithTextarea";

type PropsWriteWith = {
    layoutRevolver: KeyRevolver,
    baseClass?: string,
    inputHeight?: string
}
/**
 * @param layoutRevolver - KeyRevolver - Stack of Keyboard Layouts
 * @param baseClass - string | undefined - if two keyboards with same base class are on the same screen,
 *                                         the second will stack below the first.
 *                                         Choose different base classes to render them individually.
 * @param inputHeight - string | undefined - height of the input textarea
 * @returns  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>,HTMLDivElement>
 *           - a div Element with textarea input and keyboard below with given layout.
 */
export default function WriteWithRevolver({
                                              layoutRevolver,
                                              baseClass = "default",
                                              inputHeight = "500px"
                                          }: PropsWriteWith) {
    const {
        inputRef,
        typeSymbol,
        handleBackspace,
        saveCaretSelection,
        text,
        saveChange
    } = useKeyboardTextareaConnection()
    const {selectedChamber, cycleLeft, cycleRight} = useRevolver(layoutRevolver)

    function onKeyPress(button: string, event: any) {
        event.preventDefault()
        if (button === "{lock}") cycleRight()
        else if (button === "{shift}") cycleLeft()
        else if (button === "{space}") typeSymbol(" ")
        else if (button === "{enter}") typeSymbol("\n")
        else if (button === "{tab}") typeSymbol("\t")
        else if (button === "{bksp}") handleBackspace()
        else typeSymbol(button)
    }

    return (
        <div>
            <textarea
                style={{
                    resize: "none",
                    minWidth: '100%',
                    minHeight: inputHeight,
                    fontSize: "3em",
                    fontFamily: "Verdana, Arial, Helvetica, sans-serif",
                    border: "2px solid grey"
                }}
                ref={inputRef}
                id={'editorArea'}
                value={text}
                onSelect={saveCaretSelection}
                onChange={saveChange}
            />
            <Keyboard
                display={{
                    '{bksp}': '⌫',
                    '{enter}': '⎆',
                    '{tab}': '↹',
                    '{lock}': '⇦',
                    '{shift}': '⇨',
                    '{space}': ' '
                }}
                onKeyPress={onKeyPress}
                layout={selectedChamber()}
                //theme={"my-theme"}
                disableRowButtonContainers
                baseClass={baseClass}
            />
        </div>
    )
}