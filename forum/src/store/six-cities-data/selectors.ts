import { NameSpace } from '../../const';
import { Post, User, Comment } from '../../types/forumType';
import { State } from '../../types/state';

export const getPosts = (state: Pick<State, NameSpace.Data>): Post[] => state[NameSpace.Data].posts;
export const getPost = (state: Pick<State, NameSpace.Data>): Post => state[NameSpace.Data].post;
export const getPostsComments = (state: Pick<State, NameSpace.Data>): Comment[] => state[NameSpace.Data].comment;
export const getPostComments = (state: Pick<State, NameSpace.Data>): Comment[] => state[NameSpace.Data].postComment;
export const getPostUsers = (state: Pick<State, NameSpace.Data>): User[] => state[NameSpace.Data].users;
export const getPostsDataLoadingStatus = (state: Pick<State, NameSpace.Data>): boolean => state[NameSpace.Data].isPostsDataLoading;
