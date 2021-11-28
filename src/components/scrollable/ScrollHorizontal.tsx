import React from "react";

type Props = {
    children: any
    margin?: string
    height?: string
}
export default function ScrollHorizontal({children, margin="2px", height = "57px"}: Props) {
    return (
        <ul
            style={{
                boxSizing: "border-box",
                margin: margin,
                height: height,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                overflowY: "hidden",
                whiteSpace: "nowrap",
                listStyleType: "none",
                flexWrap: "nowrap",
            }}
        >
            {children}
        </ul>
    );
}