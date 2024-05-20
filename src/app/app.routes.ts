import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { AddTodoComponent } from './add-todo/add-todo.component'; 
import { TourComponent } from './tour/tour.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {path: 'add-todo', component: AddTodoComponent},
    {path: 'todo-details/:id', component: TodoDetailsComponent},
    {path: 'edit-todo/:id', component: AddTodoComponent},
    {path: 'tour', component: TourComponent},
    {path: 'about', component: AboutComponent},
    {path: '', component: HomeComponent},
];
