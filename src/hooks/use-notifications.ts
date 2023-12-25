'use client'

import { BASE_URL } from '@/constants/url';
import { getToken } from '@/utils/getToken';
import axios from 'axios';
import React, { useEffect } from 'react';

export const useNotifications = () => {

  const [result, setResult] = React.useState<any>([]);

  useEffect(() => {

    const getNotificationData = async () => {

      try {
        let { data } = await axios.get(`${BASE_URL}/notifications`, {
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

    getNotificationData();

  }, []);

  return result;
};
