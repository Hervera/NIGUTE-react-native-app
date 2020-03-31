import articlesReducer from './articlesReducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
  allArticles: articlesReducer,
});

export default allReducers;
