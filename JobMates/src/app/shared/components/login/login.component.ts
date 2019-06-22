import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:String;
  password:String;

  constructor(private router :Router) { }

  ngOnInit() {
  }
  login() : void{
    if(this.username==='sagar' && this.password==='sagar')
    {
      this.router.navigate(['jobSeeker']);
    }else
    {
      alert('Invalid Credential');
    }
  }
}
