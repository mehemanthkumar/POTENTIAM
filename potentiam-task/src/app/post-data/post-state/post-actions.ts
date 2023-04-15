import { createAction, props } from '@ngrx/store';
import { postModel } from './post-state';



export const GetPostAction = createAction('[Post] - Get Post');

export const BeginPostDoAction = createAction('[Post] - Begin Get Post');

export const SuccessGetPostAction = createAction(
  '[Post] - Success Get Post',
  props<{ payload: postModel[] }>()
);


export const ErrorMessage = createAction('[Post] - Error', props<{message: string}>());