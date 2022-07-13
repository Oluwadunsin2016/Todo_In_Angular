import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA,MatDialogConfig} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {

  constructor( public actRoute:ActivatedRoute, public dialog: MatDialog) { }
public todoCollection:any=[]
public todoDetails:any=[]
public todo_Id:any='';
  ngOnInit(): void {
  this.todo_Id=this.actRoute.snapshot.params['id']
  this.todoCollection=JSON.parse(localStorage.getItem('TodoLists'))
this.todoDetails=this.todoCollection.filter((val, id:any)=>id==this.todo_Id)
  console.log(this.todoDetails);
  
  }

   edit(i: any) {
   
        const dialogConfig = new MatDialogConfig();
        console.log(dialogConfig);
        

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
   this.dialog.open(DialogComponent, dialogConfig);
  }


  delete(i: Number) {
 let result= confirm('Are you sure?')
if (result===true) {
   this.todoCollection.splice(i, 1);
  this.todoCollection = this.todoCollection;
  localStorage.setItem('TodoLists', JSON.stringify(this.todoCollection))
}else{
event.preventDefault();
}
   location.reload();
  }

}
