import * as React from 'react';
import {usePushItems} from "../../hooks/onScrollPushItems";
import useInfiniteScroll from "react-infinite-scroll-hook";
import {Paper, Skeleton} from "@mui/material";
import HorizontalScroll from "./HorizontalScroll";

type Props = { children: any }
export default function HorizontalLoadOnScroll({children}: Props) {
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
        <Paper ref={rootRef}>
            <HorizontalScroll>
                {items.map((item: any) => (
                    <li key={item.key}>
                        {item.value}
                    </li>
                ))}
                {hasNext && (
                    <li key="loading" ref={infiniteRef}>
                        <Skeleton variant="circular" width={53} height={53} color={"#000000"}/>
                        <Skeleton variant="circular" width={53} height={53} color={"#000000"}/>
                        <Skeleton variant="circular" width={53} height={53} color={"#000000"}/>
                    </li>
                )}
            </HorizontalScroll>
        </Paper>
    );
}
