import { Injectable } from '@angular/core';
import { Post } from './post';
import { Observable, of, Subject } from 'rxjs';
import { POSTS } from './postData';
import { USER } from './userdata';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class JobService {

  post:Post[];
  filterData :Post[];

  constructor() { }

  postSubject=new Subject<Post[]>();
  userSubject=new Subject<User[]>();
  getJobs() {
    // return of(POSTS);
    this.postSubject.next(POSTS);
  }

  getUser():User{
    console.log(USER)
    // this.userSubject.next(USER);
    return USER[0];
  }
  

  getJob(id: number): Post{
    console.log(id)
    return POSTS.find(x => x.id === id);
  }
  

  getFilter(value){
    
    let filterData: Post[] = POSTS;
    if (!value.fulltime)
      filterData = filterData.filter(word => word.jobType !== "Full Time");
    if (!value.parttime)
      filterData = filterData.filter(word => word.jobType !== "Part Time");
    if (!value.internship)
      filterData = filterData.filter(word => word.jobType !== "Internship");
    console.log(filterData)
    this.postSubject.next(filterData);
  }

  
  
}
