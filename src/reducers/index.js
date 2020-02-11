import { combineReducers } from 'redux';
import postsReducer from './postsReducers';
import userReducer from './userReducer';

export default combineReducers({
  posts: postsReducer,
  users: userReducer
});
