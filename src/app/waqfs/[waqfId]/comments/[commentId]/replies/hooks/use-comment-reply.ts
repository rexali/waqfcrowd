import * as React from "react";

import { BASE_URL } from "@/constants/url";
import { getToken } from "@/utils/getToken";

export function useCommentReply(commentId: any, reply:any) {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        const getCommentReplies = async () => {
            try {
                let res = await fetch(`${BASE_URL}/comments/${commentId}/replies`, {
                    method: "get",
                    mode: 'cors',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + getToken('jwtoken'),
                    },
                });
                const result = await res.json();
                setData(result);
            } catch (error) {
                console.warn(error);
            }
        }

        getCommentReplies();
    }, [commentId,reply]);

    return data;
}