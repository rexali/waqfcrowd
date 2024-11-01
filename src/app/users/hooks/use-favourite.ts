'use client'

import { BASE_URL } from '@/constants/url';
import { WaqfContext } from '@/context/WaqfContext';
import { getWAQF } from '@/store/actions/waqf-actions';
import { getToken } from '@/utils/getToken';
import axios from 'axios';
import React, { useEffect } from 'react';

export const useFavourite = (userId: any) => {

    const [result, setResult] = React.useState<any>([]);

    useEffect(() => {

        const getFavouriteWaqfs = async () => {
            try {
                let { data } = await axios.get(`${BASE_URL}/waqfs/${userId}/favourites`, {
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

        getFavouriteWaqfs();

    }, [userId]);

    return result;
};