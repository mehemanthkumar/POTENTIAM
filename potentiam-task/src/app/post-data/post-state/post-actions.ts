import { createAction, props } from '@ngrx/store';
import { postModel } from './post-state';

enum actionName {
  getPost =  '[Post] - Get Post',
  beginPost = '[Post] - Begin Get Post',
  successGetPost = '[Post] - Success Get Post',
  errorInPost = '[Post] - Error',
  search_filter = '[Post] - search_ filter',
} 

export const GetPostAction = createAction(actionName.getPost);

export const BeginPostDoAction = createAction(actionName.beginPost);

export const SuccessGetPostAction = createAction(
  actionName.successGetPost,
  props<{ payload: postModel[] }>()
);


export const ErrorMessage = createAction(actionName.errorInPost, props<{message: string}>());
