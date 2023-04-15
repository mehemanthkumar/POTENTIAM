import { Action, createReducer, on } from "@ngrx/store";
import { PostState, initializeState } from "./post-state";
import { ErrorMessage, GetPostAction, SuccessGetPostAction } from "./post-actions";

export const intialState = initializeState();


const reducer = createReducer(intialState, 
    on(GetPostAction, state => state),
    on(SuccessGetPostAction, (state: PostState, { payload }) => {
        return { ...state, Posts: payload };
      }),
    on(ErrorMessage, (state:PostState , action) => {
        return { ...state, PostError: action.message };
    })
)

export function PostReducer(state: PostState | undefined, action: Action) {
    return reducer(state, action);
  }