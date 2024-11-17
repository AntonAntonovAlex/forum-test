import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { forumData } from './six-cities-data/six-cities-data';

export const rootReducer = combineReducers({
  [NameSpace.Data]: forumData.reducer,
});