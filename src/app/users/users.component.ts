import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor( public todoservice:TodoService) { }

public usersArray:any=[]

  ngOnInit(): void {
this.todoservice.getUsers().subscribe((data)=>{
console.log(data);
this.usersArray=data
})
  }

}
