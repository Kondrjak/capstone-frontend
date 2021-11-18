import {Button, Paper, Typography} from "@mui/material";
import HorizontalScroll from "../scrollable/HorizontalScroll";
import React from "react";
import CodepointButton from "./CodepointButton";
import InfoIcon from "@mui/icons-material/Info";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import InfoBackdrop from "./InfoBackdrop";


function handlePasteBin(symbol:string){
    console.log("paste symbol "+symbol+" to bin and show toast")
}

function showInfoCard(symbol:string){
    console.log("info card of symbol: " + symbol)
}

function showKeyboard(symbol:string){
    console.log("show keyboard to drop symbol: " + symbol)
}

const actions = [
    {icon: <InfoIcon/>, name: 'Info', action: showInfoCard, actionComponent: InfoBackdrop},
    {icon: <KeyboardIcon/>, name: 'Add', action: showKeyboard, actionComponent: null},
];


type Props = {
    group: { "code-points": string[]; name: string; "verbose-name": string },
    handleNewKey: any
}
export default function CodepointCard({group}: Props) {
    const scrollableRef = React.createRef();
    const fontSize = "30px";
    return (
        <Paper>
            <HorizontalScroll scrollRef={scrollableRef}>
                <Button key="name" variant="contained">
                    <Typography fontSize={fontSize}>
                        {group.name}
                    </Typography>
                </Button>
                {group["code-points"].map(symbol =>
                        <CodepointButton
                            key={symbol}
                            codepoint={symbol}
                            actions={actions}
                            onClick={()=>handlePasteBin(symbol)}/>
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