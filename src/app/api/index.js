// import axios from 'axios';
// const articlesURL = 'http://nigute.rw/api/articles';

// export default async () => {
//   return await axios.get(articlesURL);
// };

import {
  fetchArticlesPending,
  fetchArticlesSuccess,
  fetchArticlesError,
} from 'actions';

function fetchArticles() {
  return dispatch => {
    dispatch(fetchArticlesPending());
    fetch('http://nigute.rw/api/articles')
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        console.log('==========>', res.articles);
        dispatch(fetchArticlesSuccess(res.articles));
        return res.articles;
      })
      .catch(error => {
        dispatch(fetchArticlesError(error));
      });
  };
}

export default fetchArticles;
