import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";

type Props = { children: any }
export default function HideOnScrollNav(props: Props) {
    const trigger = useScrollTrigger()
    return (<>
        <AppBar>
            <Slide appear={false} direction="down" in={!trigger}>
                <Toolbar>
                    {props.children}
                </Toolbar>
            </Slide>
        </AppBar>
        {/* workaround to make the content appear exactly below the menu,
            if next 3 lines are removed, the menu might overlap with page content*/}
        <Slide appear={false} direction="down" in={!trigger}>
            <Toolbar/>
        </Slide>
    </>)
}