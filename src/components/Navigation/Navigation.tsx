import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import {Button} from "@mui/material";

function NavItem(props:any) {
    return (<Button variant="contained"> {props.children} </Button>);
}

type Props = {

}
export default function Navigation(props:Props) {
    const trigger = useScrollTrigger()
    return (
        <Slide appear={false} direction="down" in={!trigger}>
            <AppBar>
                <Toolbar>
                    <NavItem>
                        <span role="img" aria-label="Hand with pen">
                            ✍
                        </span>
                        Write
                    </NavItem>
                    <NavItem>
                        <span role="img" aria-label="Keyboard">
                            ⌨
                        </span>
                        Mappings
                    </NavItem>
                    <NavItem>
                        <span role="img" aria-label="Codepoint">
                            𐌎
                        </span>
                        Groups
                    </NavItem>
                    <NavItem>
                        <span role="img" aria-label="Codepoint">
                            ⁞
                        </span>
                        Ranges
                    </NavItem>
                </Toolbar>
            </AppBar>
        </Slide>
    )
}