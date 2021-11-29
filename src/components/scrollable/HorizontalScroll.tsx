import React from "react";

type Props = {
    children: any
}
export default function HorizontalScroll({children}: Props) {
    const margin = "2px";
    const height = "57px";
    return (
        <ul
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
            {children}
        </ul>
    );
}