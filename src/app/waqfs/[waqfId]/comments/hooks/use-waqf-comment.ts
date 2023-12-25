import { BASE_URL } from "@/constants/url";
import { getToken } from "@/utils/getToken";
import * as React from "react";

export function useWaqfComment(waqfId: any, comment:any) {
    const [data, setData] = React.useState<any>([]);

    React.useEffect(() => {
        const getWaqfComments = async () => {
            try {
                let commentRes = await fetch(`${BASE_URL}/waqfs/${waqfId}/comments`, {
                    method: "get",
                    mode: 'cors',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + getToken('jwtoken'),
                    },
                });
                const result = await commentRes.json();
                setData(result);
            } catch (error) {
                console.warn(error);
            }
        }

        getWaqfComments();


    }, [waqfId,comment]);

    return data;
}