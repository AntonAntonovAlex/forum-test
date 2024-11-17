import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { Post, User, Comment } from '../types/forumType';
import { redirectToRoute } from './action';
import { APIRoute, AppRoute } from '../const';
import { addComment } from './six-cities-data/six-cities-data';

export const fetchPostsAction = createAsyncThunk<Post[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchPosts',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Post[]>(APIRoute.Posts);
    return data;
  },
);

export const deletePostAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/deletePost',
  async (id, {dispatch, extra: api}) => {
    await api.delete<Post[]>(`${APIRoute.Posts}/${id}`);
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const fetchPostAction = createAsyncThunk<Post, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchPost',
  async (id, {extra: api}) => {
    const {data} = await api.get<Post>(`${APIRoute.Posts}/${id}`);
    return data;
  },
);

export const fetchPostUsersAction = createAsyncThunk<User[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchPostUsers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<User[]>(APIRoute.Users);
    return data;
  },
);

export const fetchPostsCommentsAction = createAsyncThunk<Comment[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchPostsComments',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Comment[]>(APIRoute.Comments);
    return data;
  },
);

export const fetchPostCommentsAction = createAsyncThunk<Comment[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchPostComments',
  async (id, {extra: api}) => {
      const {data} = await api.get<Comment[]>(`${APIRoute.PostCommens}${id}/comments`);
      return data;
  },
);

export const sendCommentAction = createAsyncThunk<void, {
  id: string,
  userId: string,
  body: string,
  title: string,
  userEmail: string,
}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/sendCommentAction',
  async ({id, userId, body, title}, {dispatch, extra: api}) => {
    const {data} = await api.put<Post>(`${APIRoute.Posts}/${id}`, {id, title, body, userId});
    const dataComment = {
      postId: +id,
      id: Math.floor(Math.random() * 50),
      name: data.title,
      email: data.userId+'@'+data.title,
      body: data.body,
    };
      dispatch(addComment(dataComment));
  },
);