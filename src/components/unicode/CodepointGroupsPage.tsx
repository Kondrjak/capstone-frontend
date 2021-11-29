import React, {useState} from 'react';
import LoadOnScrollCodepointGroups from "../scrollable/LoadOnScrollCodepointGroups";

function NewCodepointGroup() {
    return null;
}

export default function CodepointGroupsPage() {
    return (<>
        <NewCodepointGroup/>
        <LoadOnScrollCodepointGroups/>
    </>);
}