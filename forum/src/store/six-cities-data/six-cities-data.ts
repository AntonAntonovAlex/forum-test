import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ForumData } from '../../types/state';
import { NameSpace } from '../../const';
import { Comment } from '../../types/forumType';
import { fetchPostsAction, fetchPostUsersAction, fetchPostsCommentsAction, fetchPostCommentsAction, fetchPostAction } from '../api-actions';

const initialState: ForumData = {
  posts: [],
  post: {
    userId: 0,
    id: 0,
    title: '',
    body: '',
},
  users: [],
  comment: [],
  postComment: [],
  isPostsDataLoading: true,
};

export const forumData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    addComment: (state, action: PayloadAction<Comment>) => {
      state.postComment.push(action.payload);
    },
  },
  extraReducers(builder) {
    builder
    .addCase(fetchPostCommentsAction.fulfilled, (state, action) => {
      state.postComment = action.payload;
    })
    .addCase(fetchPostsAction.pending, (state) => {
      state.isPostsDataLoading = true;
    })
    .addCase(fetchPostsAction.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.isPostsDataLoading = false;
    })
    .addCase(fetchPostAction.fulfilled, (state, action) => {
      state.post = action.payload;
    })
    .addCase(fetchPostsCommentsAction.fulfilled, (state, action) => {
      state.comment = action.payload;
    })
    .addCase(fetchPostUsersAction.fulfilled, (state, action) => {
      state.users = action.payload;
    })
  }
});

export const {addComment} = forumData.actions;