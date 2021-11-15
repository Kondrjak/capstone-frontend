import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";

type Props = { children: any }
export default function HideOnScrollNav(props: Props) {
    const trigger = useScrollTrigger()
    return (<>
        <Slide appear={false} direction="down" in={!trigger}>
            <AppBar>
                <Toolbar>
                    {props.children}
                </Toolbar>
            </AppBar>
        </Slide>
        {/* workaround to make the content appear exactly below the menu*/}
        <div style={{minHeight: "64px"}}/>
    </>)
}