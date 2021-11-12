import React from "react";
import '../../index'
import CssBaseline from "@mui/material/CssBaseline";
import {ThemeProvider} from "@mui/material";
import {themes} from "../../themes/themes";
import Navigation from "../Navigation/Navigation";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Write from "../Write/Write";

export default function Main() {
    return (
        <ThemeProvider theme={themes}>
            <CssBaseline/>
            <Container>
                <Navigation/>
                <Box>
                    test
                </Box>
                <Box>
                    test
                </Box>
                <Box>
                    test
                </Box>
                <Box>
                    test
                </Box>
                <Box>
                    <Write/>
                </Box>
            </Container>
        </ThemeProvider>
    );
}