import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { TodoComponent } from './todo/todo.component';
import { UsersComponent } from './users/users.component';
import { UserstodoComponent } from './userstodo/userstodo.component';


const routes: Routes = [
{path:'', redirectTo: '/home', pathMatch: 'full'},
{path:'home', component: HomeComponent},
{path:'registration', component: RegistrationComponent},
{path:'login', component: LoginComponent},
// {path:'todo', component: TodoComponent},
{path:'todo', children: [
{path:'', component:TodoComponent},
{path:'tododetails/:id', component:TodoDetailsComponent}
]},
{path: 'users', children:[
{path:'', component:UsersComponent},
{path:'todo/:id', component:UserstodoComponent},
] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
