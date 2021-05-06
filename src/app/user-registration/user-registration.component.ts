import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.model'
@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent  {
  userObj1:User={username:"",dob:"",email:""};
  addUserData1(){
  console.log(this.userObj1);
  this.userObj1={username:"",dob:"",email:""};
  }
 

}
