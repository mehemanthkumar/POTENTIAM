import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostState } from "./post-state";


export const getPostState = createFeatureSelector<PostState>('Posts');


export const getState = createSelector(getPostState, (state) => {
    return state.Posts
});

export const getErrorMessage = createSelector(getPostState, state => {
    return state.PostError ? 'Api Error Occured' : ''
});