import {combineReducers} from 'redux';

import PostReducer from "./PostReducer";
import UserReducer from "./UserReducer";

export default combineReducers({
  posts: PostReducer,
  users: UserReducer
});