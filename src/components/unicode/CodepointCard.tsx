import {Button, Paper, Typography} from "@mui/material";
import HorizontalScroll from "../scrollable/HorizontalScroll";
import React from "react";
import CodepointDial from "../speedDial/CodepointDial";

type Props = {
    group: { "code-points": string[]; name: string; "verbose-name": string },
    handleKeyboard: any,
    handleNewKey: any
}
export default function CodepointCard({group, handleKeyboard, handleNewKey}: Props) {
    const scrollableRef = React.createRef();
    const fontSize = "30px";
    function handleClick(symbol:string){
        handleNewKey(symbol)
        // show keyboard
        handleKeyboard(true)
    }
    return (
        <Paper>
            <HorizontalScroll scrollRef={scrollableRef}>
                <Button key="name" variant="contained">
                    <Typography fontSize={fontSize}>
                        {group.name}
                    </Typography>
                </Button>
                {group["code-points"].map(symbol =>
                    <Button key={symbol} onClick={e=>handleClick(symbol)}>
                        <CodepointDial fontSymbol={symbol}/>
                    </Button>
                )}
                <Button key="verbose">
                    <Typography fontSize={fontSize}>
                        {group["verbose-name"]}
                    </Typography>
                </Button>
            </HorizontalScroll>
        </Paper>
    );
}