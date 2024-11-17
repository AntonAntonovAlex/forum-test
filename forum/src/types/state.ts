import {store} from '../store/index.js';
import { Post, Comment, User } from './forumType.js';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type ForumData = {
  posts: Post[];
  post: Post;
  users: User[];
  comment: Comment[];
  postComment: Comment[]
  isPostsDataLoading: boolean;
};