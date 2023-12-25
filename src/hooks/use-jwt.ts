'use client'

import React from "react";
import { saveToken } from "@/utils/saveToken";
import { getJWToken } from "@/utils/getJWToken";

export const useJWT = () => {
    const [token, setToken] = React.useState<string>();
    const mountRef = React.useRef(true);

    const fetchData = async () => {
        try {
            const jwt = await getJWToken();
            saveToken('jwtoken',jwt?.jwtoken);
            setToken(jwt?.jwtoken);
        } catch (error) {
            console.warn(error);
        } 
    };

    React.useEffect(() => {

        if (mountRef.current) {
            fetchData();
        }

        return () => {
            mountRef.current = false;
        }

    }, []);

    return {token};
}