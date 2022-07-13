import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }


  public firstName='';
  public lastName='';
  public phoneNumber='';
  public email='';
  public password='';
  public people:any=[];

  ngOnInit(): void {
  }
register=()=>{
let person={"First_Name":this.firstName, "Last_Name":this.lastName, "Phone_Number":this.phoneNumber, "Email":this.email, "Password":this.password }
this.people=[...this.people, person]
  localStorage.setItem('registeredPeople', JSON.stringify(this.people));
 this.firstName='';
  this.lastName='';
  this.phoneNumber='';
  this.email='';
  this.password='';
}
}
