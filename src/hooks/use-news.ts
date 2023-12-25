'use client'

import axios from 'axios';
import React, { useEffect } from 'react';

export const useNews = () => {

  const [result, setResult] = React.useState([]);

  useEffect(() => {

    const getNewsData = async () => {

      try {
        let { data } = await axios.get(`https://almubarakwaqf.org/wp-json/wp/v2/posts`, {
          headers: {
            'Accept':'application/json',
            'Content-Type': 'application/json',
          }
        });

        setResult(data);

      } catch (error) {
        console.warn(error);
      }

    };

    getNewsData();

  }, []);

  return result;
};
