import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-from";
import PostsReducer from "./reducer_posts";

const rootReducer = combineReducers({
  posts: PostsReducer,
  from: formReducer
});

export default rootReducer;
