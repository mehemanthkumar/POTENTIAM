import { Action, createReducer, on } from "@ngrx/store";
import { PostState, initializeState } from "./post-state";
import { ErrorPostAction, GetPostAction, SuccessGetPostAction } from "./post-actions";

export const intialState = initializeState();


const reducer = createReducer(intialState, 
    on(GetPostAction, state => state),
    on(SuccessGetPostAction, (state: PostState, { payload }) => {
        return { ...state, Posts: payload };
      }),
    on(ErrorPostAction, (state: PostState, error: Error) => {
        console.log(error);
        return { ...state, PostError: error };
    })
)

export function PostReducer(state: PostState | undefined, action: Action) {
    return reducer(state, action);
  }