import React from "react";
import '../../index'
import CssBaseline from "@mui/material/CssBaseline";
import {ThemeProvider} from "@mui/material";
import {themes} from "../../themes/themes";
import Write from "../keyboard/Write";
import StyleOnScrollTest from "../keyboard/StyleOnScrollTest";
import {Route, Switch, useHistory} from "react-router-dom";
import CodepointGallery from "../unicode/CodepointGallery";
import Navigation from "./Navigation";
import {defaultAlphanumerics} from "../../defaults/AlphaNumerics";
import {defaultRanges} from "../../defaults/UnicodeRanges";

export default function Main() {
    const history = useHistory();
    return (
        <ThemeProvider theme={themes}>
            <CssBaseline/>
            <Navigation/>
            <Switch key={"Switch"}>
                <Route exact path="/">
                    {"...fetching history..."+history.push("/write-text")}
                </Route>
                <Route exact path="/write-text">
                    <Write/>
                </Route>
                <Route exact path="/keyboard-mappings">
                    <StyleOnScrollTest/>
                </Route>
                <Route exact path="/codepoint-groups">
                    <CodepointGallery codepointGroups={defaultAlphanumerics}/>
                </Route>
                <Route exact path="/unicode-ranges">
                    <CodepointGallery codepointGroups={defaultRanges}/>
                </Route>
            </Switch>

        </ThemeProvider>
    );
}