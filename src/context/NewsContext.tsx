'use client'

import * as React from 'react';
import reducer from '../store/reducers/news_reducer';

const initialState = {
    news: [],
    result: {},
};

const NewsContext = React.createContext<any>(null);

const NewsProvider = ({ children }: { children: any }) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    return (
        <NewsContext.Provider value={{ state, dispatch }}>
            {children}
        </NewsContext.Provider>
    );
};

export { NewsContext, NewsProvider };
