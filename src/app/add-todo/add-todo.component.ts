import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { Todo } from '../todo';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {

  model = new Todo(1, "Watch Akshay Saini Tutorial", "on youtube", "Not Completed", new Date())

}
