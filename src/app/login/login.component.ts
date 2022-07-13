import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(public go:Router) {}

  public email = '';
  public password = '';

  ngOnInit(): void {}

  logIn = () => {
    let recovered = JSON.parse(localStorage.getItem('registeredPeople')!);
    console.log(recovered);
    let filtered=recovered.find((val:any)=>
    val.Email==this.email && val.Password==this.password
    )
    console.log(filtered);
    
     this.go.navigate(['/todo'])
  };
}
