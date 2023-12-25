'use client'

import { BASE_URL } from '@/constants/url';
import { getToken } from '@/utils/getToken';
import axios from 'axios';
import React, { useEffect } from 'react';

export const useDelete = (waqfId: any) => {
    const [result, setResult] = React.useState<any>({});    
    
    useEffect(() => {
        const deleteWaqfData = async () => {

            try {
                let { data } = await axios.delete(`${BASE_URL}/waqfs/${waqfId}/delete`, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + getToken("jwtoken"),
                    }
                });                
                setResult(data);
            } catch (error) {
                console.warn(error);
            }
        };
        
        deleteWaqfData();

    }, [waqfId]);

    return result;
};