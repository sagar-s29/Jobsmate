import { Component, OnInit } from '@angular/core';
import { PostjobService } from 'src/app/postjob.service';
import { Post } from 'src/app/Post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  postList:Post[];
  constructor(private  postjobservices: PostjobService) { }
  ngOnInit() {

    this.postjobservices.getPostList()
    .subscribe(data=>{
      this.postList=data;
      
    }
      )


      
//this.getPostList()
 // }
 // getPostList():void {
 // this.postjobservices.getPostList().subscribe(data => this.postList = data)
  //  console.log(this.postList)
  }
}
