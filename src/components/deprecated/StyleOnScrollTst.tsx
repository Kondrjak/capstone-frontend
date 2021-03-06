import React from "react";
import StyleOnScroll from "./StyleOnScroll";

export default function StyleOnScrollTst() {
    const numbers: number[] = [];
    for (let i: number = 0; i < 100; i++) {
        numbers.push(i)
    }
    return (
        <div>
            {numbers.map(value =>
                <StyleOnScroll
                    key={value}
                    threshold={-300+value*24}>
                    <div> text+{value} </div>
                </StyleOnScroll>)}
        </div>)
}