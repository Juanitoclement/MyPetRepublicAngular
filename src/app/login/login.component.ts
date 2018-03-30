import { Component, OnInit } from '@angular/core';
import { UserService} from '../services/user.service';
import {RequesthttpService} from '../services/requesthttp.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private user: UserService) { }
  data : any =  {}
  doLogin() {
    this.user.doLogin().subscribe(
      data => { this.data = data ; },
      err => { console.error(err); alert('Login Unsuccesful'); },
      () => { console.log('Login Succesful'); alert('Login Sucessful'); }
    );
  }
  ngOnInit() {
  }
}
