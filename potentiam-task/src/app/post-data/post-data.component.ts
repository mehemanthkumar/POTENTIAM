import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { PostState, postModel } from './post-state/post-state';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { BeginPostDoAction } from './post-state/post-actions';
import { getState } from './post-state/post-selectors';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.scss']
})
export class PostDataComponent implements OnInit {
  todo$:Observable<postModel[]> | undefined;
  constructor(private store: Store<{ Posts: postModel }>) { 
  }

  ngOnInit(): void {
    // this.todo$
    //   .pipe(
    //     map(x => {
    //       console.log(x);
    //     })
    //   )
    //   .subscribe();

    this.todo$ = this.store.select(getState);
    this.store.dispatch(BeginPostDoAction());
  }

}
