import axios from "axios";

export const FETCH_POSTS = "fetch_posts";

const ROOT_API_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=hellobabies1234";

export function fetchPosts() {
  const request = axios.get(`${ROOT_API_URL}/posts${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}
