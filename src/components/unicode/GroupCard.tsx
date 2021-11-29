import {Button, Typography} from "@mui/material";
import React from "react";
import CodepointButton from "./CodepointButton";
import InfoIcon from "@mui/icons-material/Info";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import InfoBackdrop from "./InfoBackdrop";
import LayoutToPasteBackdrop from "../keyLayout/LayoutToPasteBackdrop";
import LoadOnScrollHorizontal from "../scrollable/LoadOnScrollHorizontal";


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
    {icon: <KeyboardIcon/>, name: 'Add', action: showKeyboard, actionComponent: LayoutToPasteBackdrop},
];


type Props = {
    group: {name: string;  codepoints: string[]; tags?: string[]; fonts?: string[]},
    handleNewKey: any
}
export default function GroupCard({group}: Props) {
    const fontSize = "30px";
    return (
            <LoadOnScrollHorizontal>
                <Button key="name" variant="contained">
                    <Typography fontSize={fontSize}>
                        {group.name}
                    </Typography>
                </Button>
                {group.codepoints.map(symbol =>
                        <CodepointButton
                            key={symbol}
                            codepoint={symbol}
                            actions={actions}
                            onClick={()=>handlePasteBin(symbol)}/>
                )}
            </LoadOnScrollHorizontal>
    );
}