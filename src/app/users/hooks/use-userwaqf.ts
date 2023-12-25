'use client'

import { BASE_URL } from '@/constants/url';
import { getToken } from '@/utils/getToken';
import axios from 'axios';
import React, { useEffect } from 'react';


export const useUserWaqf = (userId: any) => {
    const [result, setResult] = React.useState<any>([]);

    useEffect(() => {
        const getUserWaqfs = async () => {
            try {
                let { data } = await axios.get(`${BASE_URL}/waqfs/${userId}/users`, {
                  headers: {
                    'Accept':'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+getToken("jwtoken"),
                  }
                });

                setResult(data);
            } catch (error) {
                console.warn(error);
            }
        };

        getUserWaqfs();
    }, []);

    return result;
};