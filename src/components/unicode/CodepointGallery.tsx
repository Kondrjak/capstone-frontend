import React, {useState} from 'react';
import {Container, Drawer} from "@mui/material";
import CodepointCard from "./CodepointCard";
import AssignKey from "../keyboard/AssignKey";
import {defaultLayout} from "../../defaults/Layouts";

type CodepointGroup = { "verbose-name": string; name: string; "code-points": string[]; }
type Props = { codepointGroups: CodepointGroup[] }
export default function CodepointGallery({codepointGroups}: Props) {

    const [keyLayout, setKeyLayout] = useState(defaultLayout)
    const [isKeyboardShown, showKeyboard] = useState(false)
    const [newKey, setNewKey] = useState("")

    const toggleDrawer = (open: boolean) => (event: any) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        showKeyboard(open);
    };

    return (
        <Container style={{padding: "3px"}}>
            <Drawer
                anchor="bottom"
                open={isKeyboardShown}
                onClose={toggleDrawer(false)}
            >
                <AssignKey
                    newKey={newKey}
                    keyLayout={keyLayout}
                    setKeyLayout={setKeyLayout}
                    showKeyboard={showKeyboard}/>
            </Drawer>
            {codepointGroups.map((
                group: CodepointGroup,
                index: number) => <CodepointCard
                key={index}
                handleKeyboard={showKeyboard}
                handleNewKey={setNewKey}
                group={group}/>)}
        </Container>
    );
}