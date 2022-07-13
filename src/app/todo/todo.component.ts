import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  constructor(public router: Router) {}

  public todo = '';
  public times = '';
  public date = '';
  public description = '';
  todoList: any = {};
  public todoArray: any = [];
  public editmode = false;
  public existingIndex: any = 0;

  ngOnInit(): void {
    // this.todoArray = JSON.parse(localStorage.getItem('TodoLists') || '[]');
    this.todoArray = JSON.parse(localStorage.getItem('TodoLists')!);
    if (this.todoArray == null) {
      this.todoArray = [];
    }
  }

  addTodo() {
    if (this.todo != '') {
   
      let time = new Date().toLocaleTimeString();
      let dates= new Date().toDateString()
      console.log(dates);
      
      this.todoList = { todo: this.todo, Times:this.times, Date:this.date, Description:this.description, time, dates };
      this.todoArray.push(this.todoList);
      this.todo = '';
      this.times = '';
      this.date = '';
      this.description = '';

      localStorage.setItem('TodoLists', JSON.stringify(this.todoArray));
    } else {
      alert('There is nothing to add!');
    }
  }

  view(i:any){
   localStorage.setItem('Index', i)
  }

 
}
