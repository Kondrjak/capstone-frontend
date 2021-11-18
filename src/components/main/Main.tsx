import React from "react";
import '../../index'
import CssBaseline from "@mui/material/CssBaseline";
import {ThemeProvider} from "@mui/material";
import {themes} from "../../themes/themes";
import WriteWithRevolver from "../text/WriteWithRevolver";
import LayoutGallery from "../keyboard/LayoutGallery";
import {Route, Switch, useHistory} from "react-router-dom";
import CodepointGallery from "../unicode/CodepointGallery";
import Navigation from "./Navigation";
import {defaultAlphanumerics} from "../../defaultGalleryContent/AlphaNumerics";
import {defaultRanges} from "../../defaultGalleryContent/UnicodeRanges";
import AuthProvider from "../../contexts/authentication";
import ClipboardProvider from "../../contexts/clipboard";
import {exampleRevolver} from "../../params/virtualKeyboard";

export default function Main() {
    const history = useHistory();
    return (
        <ThemeProvider theme={themes}>
            <AuthProvider>
                <CssBaseline/>
                <Navigation/>
                <Switch key={"Switch"}>
                    <Route exact path="/">
                        {"...fetching history..." + history.push("/write-text")}
                    </Route>
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
                </Switch>
            </AuthProvider>
        </ThemeProvider>
    );
}