// reducer.js
import { ActionTypes } from '../actions/news-actions';

const reducer = (state:any, action:any) => {

  switch (action.type) {

    case ActionTypes.GET_NEWS:
      return { 
        ...state, 
        news: action.payload 
      };

    case ActionTypes.POST_NEWS:
      return { 
        ...state, 
        result: action.payload 
      };

    default:
      return state;
  }

};

export default reducer;
