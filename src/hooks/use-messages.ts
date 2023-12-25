'use client'

import { BASE_URL } from '@/constants/url';
import { getToken } from '@/utils/getToken';
import axios from 'axios';
import React, { useEffect } from 'react';

export const useMessages = () => {

  const [messages, setMessages] = React.useState<any>([]);

  useEffect(() => {

    const getMessageData = async () => {

      try {
        let { data } = await axios.get(`${BASE_URL}/messages`, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getToken("jwtoken"),
          }
        });

        setMessages(data);

      } catch (error) {
        console.warn(error);
      }

    };

    getMessageData();

  }, []);

  return { messages };
};
