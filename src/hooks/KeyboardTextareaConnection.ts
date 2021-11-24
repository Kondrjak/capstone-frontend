import {useRef, useState} from "react";

export function useFocusAndSelection(){
    const htmlElRef = useRef(null)

    function setFocus() {
        // @ts-ignore
        htmlElRef.current.focus();
    }

    function setSelection(start: number, end: number) {
        // @ts-ignore
        htmlElRef.current.selectionStart = start
        // @ts-ignore
        htmlElRef.current.selectionEnd = end
    }

    return {htmlElRef, setFocus, setSelection}
}

export default function useKeyboardTextareaConnection(){
    const {htmlElRef: inputRef, setFocus, setSelection} = useFocusAndSelection()
    const [text, setText] = useState("")
    const [caret, setCaret] = useState({start: 0, end: 0, content: ""})

    function saveChange(event: any) {
        setText(event.target.value);
    }

    function saveCaretSelection(event: any) {
        setCaret({
            start: event.target.selectionStart,
            end: event.target.selectionEnd,
            content: text.slice(event.target.selectionStart, event.target.selectionEnd)
        })
    }

    function handleBackspace() {
        if (caret.content === "") {
            const newCaretPos = caret.start - 1
            setText(text.slice(0, newCaretPos) + text.slice(caret.start, text.length))
            setCaret({start: newCaretPos, end: newCaretPos, content: ""})
            setSelection(newCaretPos, newCaretPos)
        } else {
            setText(text.slice(0, caret.start) + text.slice(caret.end, text.length))
            setCaret({start: caret.start, end: caret.start, content: ""})
            setSelection(caret.start, caret.start)
        }
    }

    function typeSymbol(symbol: string) {
        setText(text.slice(0, caret.start) + symbol + text.slice(caret.end, text.length))
        const newCaretPos = caret.start + symbol.length
        setCaret({start: newCaretPos, end: newCaretPos, content: ""})
        setSelection(newCaretPos, newCaretPos)
        setFocus()
    }

    return {inputRef, text, saveChange, saveCaretSelection, handleBackspace, typeSymbol}
}



