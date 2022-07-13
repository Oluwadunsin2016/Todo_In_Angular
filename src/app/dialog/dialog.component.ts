import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DialogComponent>) { }

  public todo = '';
  public times = '';
  public date = '';
  public description = '';
  public todoArray: any = [];
  public savedTodo: any = [];
  public id:any = '';
  


  ngOnInit(): void {
  this.id=localStorage.getItem('Index')
  this.savedTodo=JSON.parse(localStorage.getItem('TodoLists'))
  console.log(this.savedTodo);
  // let todoArray=this.savedTodo.filter((val,ind)=>ind==id)
  this.todoArray=this.savedTodo[this.id]
  console.log(this.todoArray);
  this.todo=this.todoArray.todo
  this.times=this.todoArray.Times
  this.description=this.todoArray.Description
  console.log(this.todoArray.todo);
  
console.log(MAT_DIALOG_DATA);
  
  }

  update(){
   this.savedTodo[this.id].todo = this.todo;
   this.savedTodo[this.id].Times = this.times;
   this.savedTodo[this.id].Date = this.date;
   this.savedTodo[this.id].Description = this.description;
    localStorage.setItem('TodoLists', JSON.stringify(this.savedTodo));
    this.todo="";
    this.times="";
    this.date="";
    this.description="";
      this.dialogRef.close();
      location.reload()
  }

  cancel(){
      this.dialogRef.close();
  }
}


