import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { BeginPostDoAction, ErrorMessage, SuccessGetPostAction } from './post-actions';
import { postModel } from './post-state';
import { PostServiceService } from '../post-service.service';

@Injectable()

export class PostsEffects {
    constructor(
      private action$: Actions,
      private postService:PostServiceService
    ) {}
    GetPosts$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(BeginPostDoAction),
      mergeMap(action =>
        this.postService.getPosts().pipe(
          map((data: postModel[]) => {
            return SuccessGetPostAction({ payload: data });
          }),
          catchError((error: Error) => {
            console.log(error.message);
            return of(ErrorMessage({message:error.message}));
          })
        )
      )
    )
  );
}