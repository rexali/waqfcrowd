
export const ActionTypes = {
    GET_NEWS: 'GET_NEWS',
    POST_NEWS: 'POST_NEWS',
  };
  
  export const getNews = (newData:any) => ({
    type: ActionTypes.GET_NEWS,
    payload: newData,
  });
  
  export const postNews = (newsData: any) => ({
    type: ActionTypes.POST_NEWS,
    payload:newsData ,
  });
  