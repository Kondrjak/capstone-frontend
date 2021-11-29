import React from "react";
import '../../index'
import CssBaseline from "@mui/material/CssBaseline";
import {ThemeProvider} from "@mui/material";
import {themes} from "../../themes/themes";
import WriteWithRevolver from "../text/WriteWithRevolver";
import LayoutGallery from "../keyLayout/LayoutGallery";
import {Route, Switch} from "react-router-dom";
import CodepointGallery from "../unicode/CodepointGallery";
import Navigation from "./Navigation";
import {defaultAlphanumerics} from "../../defaultGalleryContent/AlphaNumerics";
import {defaultRanges} from "../../defaultGalleryContent/UnicodeRanges";
import ClipboardProvider from "../../contexts/clipboard";
import {exampleRevolver} from "../../params/virtualKeyboard";
import Login from "../login/Login";
import {AuthProvider} from "../../contexts/authentication";

export default function Main() {
    return (
        <ThemeProvider theme={themes}>
            <Switch key={"Switch"}>
                <AuthProvider>
                    {/* this route must be the first child of auth provider */}
                    <Route exact path="/">
                        <CssBaseline/>
                        <Login/>
                    </Route>
                    <CssBaseline/>
                    <Navigation/>
                    <ClipboardProvider>
                        <Route exact path="/write-text">
                            <WriteWithRevolver layoutRevolver={exampleRevolver} baseClass={"default"}/>
                        </Route>
                        <Route exact path="/keyboard-layouts">
                            <LayoutGallery/>
                        </Route>
                        <Route exact path="/codepoint-groups">
                            <CodepointGallery codepointGroups={defaultAlphanumerics}/>
                        </Route>
                        <Route exact path="/unicode-ranges">
                            <CodepointGallery codepointGroups={defaultRanges}/>
                        </Route>
                    </ClipboardProvider>
                </AuthProvider>
            </Switch>
        </ThemeProvider>
    );
}