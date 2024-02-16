import { Component, inject } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  todoService: TodoService = inject(TodoService)
  todoList: Todo[] = [];

  constructor() {
    this.todoService.getallTodos().subscribe((todos: Todo[] | [])=> {
      this.todoList = todos;
      console.log("hey me todolist", this.todoList)
    })
  }

  onAddTodo() {
    console.log("Hi, did you just click on Add Todo?")
  }
}
