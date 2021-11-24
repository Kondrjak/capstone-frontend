import * as React from 'react';
import {Button} from "@mui/material";
import HideOnScrollNav from "../scrollable/HideOnScrollNav";

import {NavLink} from "react-router-dom";

type ItemProps = {
    symbol: any,
    label: string,
    text: string,
}
function NavItem({symbol, label, text}: ItemProps) {
    return (
        <Button variant="contained">
            <span role="img" aria-label={label}>
                {symbol}
            </span>
            {text}
        </Button>);
}

type Props = {}
export default function Navigation(props: Props) {
    return (
        <HideOnScrollNav>
            <NavLink to="/write-text">
                <NavItem symbol="✍"
                          label="write"
                          text="text"
                />
            </NavLink>
            <NavLink to="/keyboard-layouts">
                <NavItem symbol="⌨"
                          label="keyboard"
                          text="layouts"
                />
            </NavLink>
            <NavLink to="/codepoint-groups">
                <NavItem symbol="𐌎"
                          label="codepoint"
                          text="groups"
                />
            </NavLink>
            <NavLink to="/unicode-ranges">
                <NavItem symbol="⁞"
                          label="unicode"
                          text="ranges"
                />
            </NavLink>
        </HideOnScrollNav>
    )
}

