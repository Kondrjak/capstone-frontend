import React from "react";
import {defaultLayouts} from "../../defaultGalleryContent/Layouts";
import {Button, Card, CardContent, Chip, Container, Divider} from "@mui/material";
import {Codepoint, Fonts, LayoutAsString, Tags, User} from "../../types/tsTypes";
import WriteWithLayout from "../text/WriteWithLayout";

type LCardProps = { layout: LayoutAsString, symbol: Codepoint, tags: Tags, fonts: Fonts, author: User }

function LayoutCard({layout, symbol, tags, fonts, author}: LCardProps) {
    return (
        <>
            <Card>
                <CardContent>
                    {/*heading*/}
                    <Divider>
                        <Chip label={symbol + " by " + author}/>
                    </Divider>
                    <div key="tags and fonts">
                        {/*tags*/}
                        <Chip color="info" label="tags"/>
                        {tags.map(tag => <Button key={tag}>{tag}</Button>)}
                        {/*fonts supporting this layout*/}
                        <Chip color="info" label="fonts"/>
                        {fonts.map(font => <Button key={font}>{font}</Button>)}
                    </div>
                    <WriteWithLayout layout={layout.split("\n")} baseClass={symbol}/>
                </CardContent>
            </Card>
            <br/>
        </>

    );
}

export default function LayoutGallery() {

    return (
        <Container style={{padding: "16px"}}>
            {defaultLayouts.map(layoutData => <LayoutCard key={layoutData.symbol}{...layoutData}/>)}
        </Container>)
}