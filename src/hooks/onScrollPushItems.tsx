import * as React from 'react';

const LIST_LOAD_CHUNK_SIZE = 20;
const RESPONSE_TIME_IN_MS = 50;

export interface ScrollListItem {
    key: number;
    value: string;
}

interface Response {
    hasNextPage: boolean;
    data: ScrollListItem[];
}

function pushItemsFrom(array: any[], startCursor = 0): Promise<Response> {
    return new Promise((resolve) => {
        let loadedSlice: ScrollListItem[] = [];

        setTimeout(() => {
            for (let i = startCursor; i < Math.min(array.length, startCursor + LIST_LOAD_CHUNK_SIZE); i++) {
                const newItem = {
                    key: i,
                    value: array[i],
                };
                loadedSlice = [...loadedSlice, newItem];
            }
            resolve({hasNextPage: loadedSlice.length < array.length, data: loadedSlice});
        }, RESPONSE_TIME_IN_MS);
    });

}

export function usePushItems(array: any[]) {
    const [loading, setLoading] = React.useState(false);
    const [items, setItems] = React.useState<ScrollListItem[]>([]);
    const [hasNextPage, setHasNextPage] = React.useState<boolean>(true);
    const [error, setError] = React.useState<Error>();


    async function loadMore() {
        setLoading(true);
        try {
            const startCursor = items.length
            const {data, hasNextPage: newHasNextPage} = await pushItemsFrom(array, startCursor);
            setItems((current) => [...current, ...data]);
            setHasNextPage(newHasNextPage);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }

    return {loading, items, hasNextPage, error, loadMore};
}