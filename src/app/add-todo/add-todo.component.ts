import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';
import { Todo, TodoStatus } from '../todo';
import { TodoService } from '../todo.service';
import Swal from 'sweetalert2'
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule, JsonPipe, CommonModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {

  todoService: TodoService = inject(TodoService);

  todoStatus: { [key: string]: TodoStatus } = TodoStatus;

  constructor(private router: Router) {}

  model = new Todo(null, null, null, this.todoStatus['SELECT'] , null);

  onSubmit(todoForm: NgForm){
    const newTodo = todoForm.value;
    this.todoService.addTodo(newTodo).subscribe((response: HttpResponse<Todo>) => {
      console.log('New Todo response', response);
      Swal.fire({
        title: "Success",
        text: "Your todo has been added.",
        icon: "success",
        timer: 10000,
        timerProgressBar: true,
        allowOutsideClick: false,
        allowEscapeKey: false
      }).then(() => {
          this.router.navigate([''])
      })
    })
  }

  getTodoStatus() {
    return Object.keys(this.todoStatus)
  }
  
}
