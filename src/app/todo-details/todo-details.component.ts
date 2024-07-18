import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-todo-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-details.component.html',
  styleUrl: './todo-details.component.css',
})
export class TodoDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  todoService: TodoService = inject(TodoService);

  todoId: string = '-1';
  todo!: Todo | undefined;

  constructor(private router: Router) {
    this.todoId = this.route.snapshot.params['id'];
    this.todoService.getTodo(this.todoId).subscribe((todoitem: Todo) => {
      this.todo = todoitem;
    });
  }

  onDeleteTodo(id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.todoService.deleteTodo(id).subscribe((response) => {
          Swal.fire({
            title: 'Deleted!',
            text: 'Your todo has been deleted.',
            icon: 'success',
            timer: 10000,
            timerProgressBar: true,
            allowOutsideClick: false,
            allowEscapeKey: false,
          }).then((result) => {
            this.router.navigate(['']);
          });
        });
      }
    });
  }

  onEditTodo(id: any) {
    console.log('id', id);
    this.router.navigate(['edit-todo', id]);
  }
}
