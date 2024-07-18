import { Routes } from '@angular/router';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { TodoComponent } from './todo/todo.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: 'add-todo', component: AddTodoComponent },
  { path: 'todo-details/:id', component: TodoDetailsComponent },
  { path: 'edit-todo/:id', component: AddTodoComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'about', component: AboutComponent },
  { path: '', component: TodoComponent },
];
