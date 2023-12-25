'use client'

import { BASE_URL } from '@/constants/url';
import { WaqfContext } from '@/context/WaqfContext';
import { getWAQF } from '@/store/actions/waqf-actions';
import { getToken } from '@/utils/getToken';
import React, { useEffect } from 'react';

export const useSearch = (searchTerm: any) => {

    const [result, setResult] = React.useState<any>([]);

    useEffect(() => {

        const getSearchedData = async (term: any) => {
            try {
                let jwtoken = getToken('jwtoken');
                let response = await fetch(`${BASE_URL}/searchs?term=${term}`, {
                    method: "GET",
                    mode: 'cors',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + jwtoken,
                    },
                });

                setResult(await response.json());
            } catch (error) {
                console.log(error);
            }
        };

        getSearchedData(searchTerm);

    }, []);

    return result;
};