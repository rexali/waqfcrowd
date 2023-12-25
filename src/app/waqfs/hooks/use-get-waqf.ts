'use client'

import { BASE_URL } from '@/constants/url';
import { getToken } from '@/utils/getToken';
import axios from 'axios';
import React, { useEffect } from 'react';

export const useGetWaqf = (waqfId: any) => {
    const [result, setResult] = React.useState<any>({});    
    
    useEffect(() => {
        const getWaqfData = async () => {

            try {
                let { data } = await axios.get(`${BASE_URL}/waqfs/${waqfId}`, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + getToken("jwtoken"),
                    }
                });                
                setResult(data[0]);
            } catch (error) {
                console.warn(error);
            }
        };
        
        getWaqfData();

    }, [waqfId]);

    return result;
};