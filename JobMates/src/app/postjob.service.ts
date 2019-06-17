import { Injectable } from '@angular/core';
import {Post} from './Post';
import {observable, Subject, Observable, of} from 'rxjs';
import { postList } from './postList';

@Injectable({
  providedIn: 'root'
})
export class PostjobService {
  postList:Post[];
  constructor() { }
  getPostList(): Observable<Post[]>
  {
    this.postList = postList;
    //console.log(this.postList);
    return of(this.postList);
  }
  getjobpost =new Subject<Post[]>();
}