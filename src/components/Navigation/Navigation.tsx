import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import {Button} from "@mui/material";

function NavItem(props:any) {
    return (<Button variant="contained"> {props.children} </Button>);
}

export default function Navigation() {
    const trigger = useScrollTrigger()
    return (
        <Slide appear={false} direction="down" in={!trigger}>
            <AppBar>
                <Toolbar>
                    <NavItem>
                        Type Unicode
                    </NavItem>
                    <NavItem>
                        Key Mappings
                    </NavItem>
                    <NavItem>
                        Groups
                    </NavItem>
                    <NavItem>
                        Ranges
                    </NavItem>
                </Toolbar>
            </AppBar>
        </Slide>
    )
}