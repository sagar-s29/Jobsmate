import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router,ActivatedRoute } from '@angular/router';
import { JobService } from 'src/app/job.service';
import { User } from 'src/app/user';
//import {userdata} from 'src/app/userdata';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:User;

  constructor(private router: Router, private route:ActivatedRoute,private service:JobService) { }

  ngOnInit() { 
    // this.route.paramMap.subscribe((params) => {
    // console.log(params);
    // this.user=this.service.getUser();
    // });
    // this.route.paramMap.subscribe((params) => {
    //   console.log(params);
      
    //   });
      this.user=this.service.getUser();
      console.log(this.user);

      
  }
  edit() : void{
    this.router.navigate(['../editprofile'],{relativeTo:this.route});

}
}
