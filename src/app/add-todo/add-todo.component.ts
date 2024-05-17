import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';
import { Todo, TodoStatus } from '../todo';
import { TodoService } from '../todo.service';
import Swal from 'sweetalert2'
import { HttpResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule, JsonPipe, CommonModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent implements OnInit {

  todoId!: number;
  model!: Todo
  todoItem!: Todo
  isVisible = true;

  route: ActivatedRoute = inject(ActivatedRoute);
  todoService: TodoService = inject(TodoService);

  todoStatus: { [key: string]: TodoStatus } = TodoStatus;

  constructor(private router: Router) {}

  ngOnInit(): void {

    this.model = new Todo(null, null, null, this.todoStatus['SELECT'] , null);

    this.todoId = Number(this.route.snapshot.params['id']);

    if (this.todoId) {
      this.isVisible = false;
      this.todoService.getTodo(this.todoId).subscribe((todo: Todo) => {
        this.model = todo;
        console.log("Model", this.model);
      })
    }
  }

  onSubmit(todoForm: NgForm){
    this.todoItem = todoForm.value;
    if (this.todoId) {
      this.saveUpdateTodo(this.todoId, this.todoItem)
    } else {
      this.saveAddTodo(this.todoItem)
    }
  }

  getTodoStatus() {
    return Object.keys(this.todoStatus)
  }


  saveUpdateTodo(todoId: number, todo: Todo) {
    this.todoService.updateTodo(todoId, todo).subscribe((response: HttpResponse<Todo>) => {
      Swal.fire({
        title: "Success",
        text: "Your todo has been Updated.",
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

  saveAddTodo(todo: Todo) {
    this.todoService.addTodo(this.todoItem).subscribe((response: HttpResponse<Todo>) => {
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
  
}
