import {useRef, useState} from "react";

export function useFocusAndSelection() {
    const htmlElRef = useRef(null)

    function setFocus() {
        // @ts-ignore
        htmlElRef.current.focus();
    }

    function setFocusWithoutOsKeyboardShowing(){
        // @ts-ignore
        htmlElRef.current.readOnly = false
        setFocus()
    }

    function setSelection(start: number, end: number) {
        // @ts-ignore
        htmlElRef.current.selectionStart = start
        // @ts-ignore
        htmlElRef.current.selectionEnd = end
    }

    return {htmlElRef, setFocusWithoutOsKeyboardShowing, setSelection}
}

export default function useKeyboardTextareaConnection() {
    const {htmlElRef: inputRef, setFocusWithoutOsKeyboardShowing, setSelection} = useFocusAndSelection()

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

    //function isHighSurrogate(code: number) {return 0xD800 <= code && code <= 0xDBFF}
    function isLowSurrogate(code: number) {
        return 0xDC00 <= code && code <= 0xDFFF
    }


    function handleBackspace() {
        if (caret.content === "") {
            let behindCursor = caret.start - 1
            let charCodeBehindCursor = text.charCodeAt(behindCursor)
            let symbolChars = 1
            while (isLowSurrogate(charCodeBehindCursor)){
                symbolChars++
                behindCursor--
                charCodeBehindCursor = text.charCodeAt(behindCursor)
            }
            const newCaretPos = caret.start - symbolChars
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
        setFocusWithoutOsKeyboardShowing()
    }

    return {inputRef, text, saveChange, saveCaretSelection, handleBackspace, typeSymbol}
}



