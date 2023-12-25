import { BASE_URL } from "@/constants/url";
import { getToken } from "@/utils/getToken";
import React from "react";

export function useSearch(term: any, pageNumber: any) {
    
    const [data, setData] = React.useState();

    React.useEffect(() => {
        const searchWaqfToSupport = async () => {
            try {
                let jwtoken = getToken('jwtoken');
                let response = await fetch(`${BASE_URL}/searchs?term=${term}&page=${pageNumber}`, {
                    method: "GET",
                    mode: 'cors',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + jwtoken,
                    },
                });
                const result = await response.json()

                setData(result);
            } catch (error) {
                console.log(error);
            }
        };

        searchWaqfToSupport();

    }, [term, pageNumber]);


    return { data };
}
