import React from "react";
import '../../index'
import CssBaseline from "@mui/material/CssBaseline";
import {ThemeProvider} from "@mui/material";
import {themes} from "../../themes/themes";
import Navigation from "../Navigation/Navigation";
import Write from "../Text/Write";
import Mapping from "../KeyMappings/Mapping";
import {Route, Switch, useHistory} from "react-router-dom";
import UcRanges from "../CodePoint/UcRanges";
import CpGallery from "../CodePoint/CpGallery";

export default function Main() {
    const history = useHistory();
    return (
        <ThemeProvider theme={themes}>
            <CssBaseline/>
            <Navigation/>
            <Switch key={"Switch"}>
                <Route exact path="/">
                    {"..."+history.push("/write-text")}
                </Route>
                <Route exact path="/write-text">
                    <Write/>
                </Route>
                <Route exact path="/keyboard-mappings">
                    <Mapping/>
                </Route>
                <Route exact path="/codepoint-groups">
                    <CpGallery/>
                </Route>
                <Route exact path="/unicode-ranges">
                    <UcRanges/>
                </Route>
            </Switch>

        </ThemeProvider>
    );
}