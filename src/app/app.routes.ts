import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { AddTodoComponent } from './add-todo/add-todo.component'; 

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'add-todo', component: AddTodoComponent},
    {path: 'todo-details', component: TodoDetailsComponent},
];
