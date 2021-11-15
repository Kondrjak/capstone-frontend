import React, {Children} from "react";

type Props = {
    children: any
    scrollRef: any
}
export default function HorizontalScroll({children, scrollRef}: Props) {
    const margin = "2px";
    const height = "57px";
    return (
        <ul
            ref={scrollRef}
            style={{
                boxSizing: "border-box",
                margin: margin,
                display: "flex",
                flexDirection: "row",
                overflowY: "hidden",
                whiteSpace: "nowrap",
                listStyleType: "none",
                flexWrap: "nowrap",
                height: height
            }}
        >
            {Children.toArray(children).map(
                (child,
                 index: number) =>
                    <li key={index}
                    style={{margin:0}}>
                        {child}
                    </li>
            )}
        </ul>
    );
}