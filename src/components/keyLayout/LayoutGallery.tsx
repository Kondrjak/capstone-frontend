import React from "react";
import {defaultLayouts} from "../../defaultGalleryContent/Layouts";
import {Button, Card, Chip, Container, Divider} from "@mui/material";
import {Fonts, LayoutAsString, Tags, User} from "../../types/tsTypes";
import WriteWithLayout from "../text/WriteWithLayout";
import LoadOnScrollHorizontal from "../scrollable/LoadOnScrollHorizontal";

type LCardProps = { layout: LayoutAsString, name: string, tags: Tags, fonts: Fonts, author: User }


function HorizontalSeparator() {
    return <br/>
}

function TagsAndFonts({tags,fonts}: {tags: Tags, fonts: Fonts}) {
    return (<LoadOnScrollHorizontal key="tags and fonts">
        {/*tags*/}
        <Chip color="info" label="tags" sx={{marginRight: "10px"}}/>
        {tags.map(tag => <Button key={tag}>{tag}</Button>)}
        {/*fonts supporting this layout*/}
        <Chip color="info" label="fonts"/>
        {fonts.map(font => <Button key={font}>{font}</Button>)}
    </LoadOnScrollHorizontal>);
}

function LayoutCard({layout, name, tags, fonts, author}: LCardProps) {
    //todo: replace workaround by id
    const baseClass = name.split(" ").join("")
    return (
        <>
            <Card>
                {/*heading*/}
                <Divider>
                <Chip sx={{m:0.5}} label={name}/>
                </Divider>
                {false && <TagsAndFonts tags={tags} fonts={fonts}/>}
                {/*layout view*/}
                <WriteWithLayout layout={layout.split("\n")} baseClass={baseClass}/>
            </Card>
            <HorizontalSeparator/>
        </>

    );
}

export default function LayoutGallery() {

    return (
        <Container sx={{padding: "16px"}}>
            {defaultLayouts.map(layoutData => <LayoutCard key={layoutData.name}{...layoutData}/>)}
        </Container>)
}