import {
  FETCHING_ARTICLES_PENDING,
  FETCHING_ARTICLES_SUCCESS,
  FETCHING_ARTICLES_ERROR,
} from '../constants';
import axios from 'axios';

export const fetchArticlesPending = () => {
  return {
    type: FETCHING_ARTICLES_PENDING,
  };
};

export const fetchArticlesSuccess = articles => {
  return {
    type: FETCHING_ARTICLES_SUCCESS,
    payload: articles,
  };
};

export const fetchArticlesError = error => {
  return {
    type: FETCHING_ARTICLES_ERROR,
    error: error,
  };
};

export const fetchArticles = () => {
  return dispatch => {
    return axios
      .get('http://nigute.rw/api/articles')
      .then(response => {
        dispatch(fetchArticlesSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchArticlesError(error.response.data));
      });
  };
};
