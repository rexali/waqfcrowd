'use client'

import { BASE_URL } from '@/constants/url';
import { getToken } from '@/utils/getToken';
import axios from 'axios';
import React, { useEffect } from 'react';

export const useUpdate = (id:any) => {

    const [updates, setUpdate] = React.useState<any>([]);

    useEffect(() => {

        const getUpdates = async () => {

            try {
                let { data } = await axios.get(`${BASE_URL}/updates/${id}`, {
                  headers: {
                    'Accept':'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+getToken("jwtoken"),
                  }
                });
                setUpdate(data);

            } catch (error) {
                console.warn(error);
            }

        };

        getUpdates();

    }, [id]);

    return updates
}