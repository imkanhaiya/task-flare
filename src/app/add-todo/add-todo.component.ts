import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { FormGroup, FormsModule, NgForm } from '@angular/forms';
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
  
  id!: string | null;
  updateId!: string | null
  model!: Todo;
  todoItem!: Todo;
  showAddToDo = true;

  route: ActivatedRoute = inject(ActivatedRoute);
  todoService: TodoService = inject(TodoService);

  todoStatus: { [key: string]: TodoStatus } = TodoStatus;

  constructor(private router: Router) {}

  ngOnInit(): void {

    this.updateId = this.route.snapshot.params['id'];

    if (this.updateId) {
      this.showAddToDo = false;
      this.todoService.getTodo(this.updateId).subscribe((todo: Todo) => {
        this.model = todo;
        console.log("Model", this.model);
      })
    } else {
      this.todoService.getallTodos().subscribe((todo: Todo[]) => {
        const preTodoId = todo.length
        this.id = (preTodoId + 1).toString()
        this.model = new Todo(this.id, null, null, this.todoStatus['SELECT'] , null)
        console.log("Current id is", this.id)
      })
    }
  }

  onSubmit(todoForm: NgForm){
    this.todoItem = todoForm.value;
    if (this.updateId) {
      this.saveUpdateTodo(this.updateId, this.todoItem)
      console.log("I m update")
    } else {
      this.saveAddTodo(this.todoItem)
      console.log("I m save")
    }
  }

  getTodoStatus() {
    return Object.keys(this.todoStatus)
  }


  saveUpdateTodo(todoId: string, todo: Todo) {
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

  applyMargin (todoForm: any) {

    const titleControl = todoForm?.controls.title;
    const detailsControl = todoForm?.controls.details;
    const statusControl = todoForm?.controls.status;
    const dueDateControl = todoForm?.controls.due_date;

    if ((titleControl?.touched && titleControl?.invalid || titleControl?.invalid & titleControl?.dirty) ||
       (detailsControl?.touched && detailsControl?.invalid || detailsControl?.invalid & detailsControl?.dirty) ||
       (statusControl?.touched && statusControl?.invalid || statusControl?.invalid & statusControl?.dirty) ||
       (dueDateControl?.touched && dueDateControl?.invalid || dueDateControl?.invalid & dueDateControl?.dirty))
       {
        return {'margin-bottom': '3rem'}
       }
       return {'margin-bottom': 0}
  }

}
