import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-details.component.html',
  styleUrl: './todo-details.component.css'
})
export class TodoDetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  todoService: TodoService = inject(TodoService);

  todoId = -1
  todo!: Todo | undefined

  constructor() {
    this.todoId = Number(this.route.snapshot.params['id']);
    this.todoService.getTodoDetails(this.todoId).subscribe((todoitem: Todo) => {
      this.todo = todoitem;
    })
  }

}
