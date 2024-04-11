import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {

  todoService: TodoService = inject(TodoService);

  model = new Todo(undefined, undefined, undefined, undefined, undefined);

  onSubmit(todoForm: NgForm){
    const newTodo = todoForm.value;
    console.log("form value", newTodo);
    this.todoService.addTodo(newTodo).subscribe((newTodo: Todo) => {
      console.log('NewTodo Added', newTodo)
    })
  }

}
