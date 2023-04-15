import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { BeginPostDoAction, ErrorPostAction, GetPostAction, SuccessGetPostAction } from './post-actions';
import { PostState, postModel } from './post-state';

@Injectable()

export class PostsEffects {
    public ApiURL:string = "https://jsonplaceholder.typicode.com/posts";
    constructor(private http: HttpClient, private action$: Actions) {}
    GetPosts$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(BeginPostDoAction),
      mergeMap(action =>
        this.http.get<postModel[]>(this.ApiURL).pipe(
          map((data: postModel[]) => {
            return SuccessGetPostAction({ payload: data });
          }),
          catchError((error: Error) => {
            return of(ErrorPostAction(error));
          })
        )
      )
    )
  );
}