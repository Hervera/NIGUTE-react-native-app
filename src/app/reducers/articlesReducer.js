import {
  FETCHING_ARTICLES_PENDING,
  FETCHING_ARTICLES_SUCCESS,
  FETCHING_ARTICLES_ERROR,
} from '../constants';

const initialState = {
  pending: false,
  articles: [],
  error: null,
};

const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_ARTICLES_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCHING_ARTICLES_SUCCESS:
      return {
        ...state,
        pending: false,
        articles: action.payload,
      };
    case FETCHING_ARTICLES_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default articlesReducer;
