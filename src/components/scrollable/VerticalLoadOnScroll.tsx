import {Box, Container, Skeleton} from "@mui/material";
import React from "react";
import {usePushItems} from "../../hooks/loadOnScrollPushItems";
import useInfiniteScroll from "react-infinite-scroll-hook";

export default function VerticalLoadOnScroll({children}: { children: any }) {
    const {loading, items, error, loadMore} = usePushItems(React.Children.toArray(children))
    const hasNext = items.length < React.Children.toArray(children).length

    const [infiniteRef, {rootRef}] = useInfiniteScroll({
        loading,
        hasNextPage: hasNext,
        onLoadMore: loadMore,
        disabled: !!error,
        rootMargin: '0px 400px 0px 0px',
    });

    return (
        <Container ref={rootRef} style={{padding: "3px", listStyleType: ""}} key={2}>
            {items.map((item: any) => (
                <Box key={item.key}>
                    {item.value}
                </Box>
            ))}
            {hasNext && (
                <Box key="loading" ref={infiniteRef}>
                    <Skeleton variant="circular" width={40} height={40} color={"#000000"}/>
                </Box>
            )}
        </Container>);
}