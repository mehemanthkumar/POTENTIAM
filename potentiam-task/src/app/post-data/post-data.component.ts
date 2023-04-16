import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { postModel } from './post-state/post-state';
import { Observable } from 'rxjs';
import { BeginPostDoAction } from './post-state/post-actions';
import { getErrorMessage, getState } from './post-state/post-selectors';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.scss']
})
export class PostDataComponent implements OnInit {
  postApiData$:Observable<postModel[]> | undefined;
  Error?:Observable<string>;
  constructor(private store: Store<{ Posts: postModel }>) { 
  }

  ngOnInit(): void {
    // Api Call Invoke
    this.store.dispatch(BeginPostDoAction());
    // Api Reponse caputring
    this.postApiData$ = this.store.select(getState);
    // Error Handling
    this.Error = this.store.select(getErrorMessage);
  }

}
