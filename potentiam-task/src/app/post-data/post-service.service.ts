import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { postModel } from './post-state/post-state';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  public apiURL:string = "https://jsonplaceholder.typicode.com/posts";
  constructor(private Http:HttpClient) { }

  getPosts() {
    return this.Http.get<postModel[]>(this.apiURL);
  }
}
