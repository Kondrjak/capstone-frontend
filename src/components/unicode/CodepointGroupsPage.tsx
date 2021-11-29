import React from 'react';
import LoadOnScrollCodepointGroups from "../scrollable/LoadOnScrollCodepointGroups";
import NewGroupForm from "./NewGroupForm";

export default function CodepointGroupsPage() {
    return (
        <>
            <NewGroupForm/>
            <LoadOnScrollCodepointGroups/>
        </>)
}