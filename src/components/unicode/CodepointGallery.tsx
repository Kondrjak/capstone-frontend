import React, {useState} from 'react';
import {Container, Drawer} from "@mui/material";
import GroupCard from "./GroupCard";
import WriteWithRevolver from "../text/WriteWithRevolver";
import {exampleRevolver} from "../../params/virtualKeyboard";
import InfiniteListWithHorizontalScroll from "../scrollable/useInfiniteScroll/InfiniteListHorizontalScroll";

type CodepointGroup = { "verbose-name": string; name: string; "code-points": string[]; }
type Props = { codepointGroups: CodepointGroup[] }
export default function CodepointGallery({codepointGroups}: Props) {

    const [isKeyboardShown, showKeyboard] = useState(false)
    const [newKey, setNewKey] = useState("")
    console.log(newKey)

    const toggleDrawer = (open: boolean) => (event: any) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        showKeyboard(open);
    };

    return (
        <>
            <Drawer key={0}
                anchor="bottom"
                open={isKeyboardShown}
                onClose={toggleDrawer(false)}
            >
                <WriteWithRevolver layoutRevolver={exampleRevolver} baseClass={"default"}/>
            </Drawer>
            <Container style={{padding: "3px"}} key={2}>
                {codepointGroups.map((
                    group: CodepointGroup,
                    index: number) => <GroupCard
                    key={index}
                    handleNewKey={setNewKey}
                    group={group}/>)}

                <InfiniteListWithHorizontalScroll key={-1}/>
            </Container>

        </>
    );
}