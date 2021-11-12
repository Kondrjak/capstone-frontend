import React from "react";
import '../../index'
import CssBaseline from "@mui/material/CssBaseline";
import {Checkbox, ThemeProvider} from "@mui/material";
import {themes} from "../../themes/themes";
import Navigation from "../Navigation/Navigation";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export default function Main() {
    return (
        <ThemeProvider theme={themes}>
            <CssBaseline/>
            <Navigation/>
            <Container>
                <Box sx={
                    {
                        my: 2
                    }
                }>
                    {[...new Array(120)].map(
                        () => `.... . . . . . . .... . .  . .......
                                    . . . . .. ..  . ..  ....... . . ... . .. . .
                                    . . . . .. . . ....... .. . ..... ... . . . .
                                    ......... .... . ........ . .`,
                    )
                        .join('\n')
                    }
                </Box>
            </Container>
            <Checkbox defaultChecked/>
        </ThemeProvider>
    );
}