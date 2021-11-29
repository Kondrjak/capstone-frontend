import {Box, Container, Skeleton} from "@mui/material";
import React from "react";
import useInfiniteScroll from "react-infinite-scroll-hook";
import {useAppendQuery} from "../../hooks/onScrollLoadItemsFromNextLink";
import GroupCard from "../unicode/GroupCard";

export default function LoadOnScrollCodepointGroups(props: {}) {
    console.log("Component LoadOnScrollCodepointGroups was loaded")

    const {loading, hasNext, loadMoreFromLink, error, items} = useAppendQuery(
        "https://dev-capstone-backend.herokuapp.com/codepoint-group?page=0&size=20",
        "codepoint-group")

    console.log("Use append query was loaded")

    const [infiniteRef, {rootRef}] = useInfiniteScroll({
        loading,
        hasNextPage: hasNext,
        onLoadMore: loadMoreFromLink,
        disabled: !!error,
        rootMargin: '0px 0px 400px 0px',
    });

    return (
        <Container ref={rootRef} style={{padding: "3px", listStyleType: ""}} key={2}>
            {items.map((item: any) => {
                    console.log(item.value)
                    return (
                        <GroupCard
                            key={item.key}
                            handleNewKey={null}
                            group={item}/>
                    )
                }
            )}
            {hasNext && (
                <Box key="loading" ref={infiniteRef}>
                    <Skeleton variant="circular" width={40} height={40} color={"#000000"}/>
                </Box>
            )}
        </Container>);
}