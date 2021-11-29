import React from 'react';
import GroupCard from "./GroupCard";
import LoadOnScrollVertical from "../scrollable/LoadOnScrollVertical";
import {defaultRanges} from "../../defaultGalleryContent/UnicodeRanges";


type DefaultCodepointGroup = { "verbose-name": string; name: string; codepoints: string[]; }

export default function UnicodeRangeGallery() {
    return (
        <>
            <LoadOnScrollVertical>
                {defaultRanges.map(
                    (group: DefaultCodepointGroup, index: number) => <GroupCard
                        key={index}
                        group={group}/>)}
            </LoadOnScrollVertical>
        </>
    );
}