import axios from "axios";
import {useState} from "react";
import {useAuth} from "../contexts/authentication";

export interface ScrollListItem {
    key: number;
    value: string;
}

export function useAppendQuery(startLink: string, resourceName: string) {
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState<ScrollListItem[]>([]);
    const [nextLink, setNextLink] = useState(startLink)
    const [error, setError] = useState<Error>();
    const [hasNext, setHasNext] = useState(true)
    // @ts-ignore
    const {token} = useAuth();

    async function requestBackend(nextLink: string) {
        console.log("start loading")
        const response = await axios.get(nextLink, {headers: {Authorization: `Bearer ${token}`}});
        const newContent = response.data.content
        console.log(newContent)
        const links = response.data.links
        return {links, newContent}
    }

    async function loadMoreFromLink() {
        console.log("load more from link was triggered")
        setLoading(true);
        try {
            const {links, newContent} = await requestBackend(nextLink)

            if(newContent) setItems((current) => [...current, ...newContent]);

            let hasNextBuffer = false;
            for (let i = 0; i < links.length; i++) {
                if (links[i].rel === "next") {
                    setNextLink(links[i].href)
                    hasNextBuffer = true;
                }
            }
            setHasNext(hasNextBuffer)
        } catch (err) {
            console.log(err)
            setError(err);
        } finally {
            setLoading(false);
        }
    }

    return {loading, items, error, hasNext, loadMoreFromLink};
}