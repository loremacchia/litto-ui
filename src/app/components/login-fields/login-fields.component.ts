import { LOGIN_FIELDS1 } from './../../mocks/login-mock';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core'; 
@Component({
  selector: 'app-login-fields',
  templateUrl: './login-fields.component.html',
  styleUrls: ['./login-fields.component.css']
})
export class LoginFieldsComponent implements OnInit {
  @Input() Ids = {
    email: "" as string,
    firstName: "" as string,
    lastName: "" as string,
    password: "" as string,
  }
  /*
  @Input() name: string;
  @Input() surname: string;
  @Input() email: string;
  @Input() password: string;
  
  constructor( name: string,  surname: string,  email: string,  password: string) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.password = password;  
  }
   
  name: string = LOGIN_FIELDS1.name;
  surname: string = LOGIN_FIELDS1.surname;
  email: string = LOGIN_FIELDS1.email;
  password: string = LOGIN_FIELDS1.password;
*/
  constructor(){
    console.log("jgujwifujiw");
  }
  
  ngOnInit(): void {
    console.log("gsfuidjijdsi");
  }



}
