import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) { }

  baseUrl = "http://localhost:3000/todos"

  getallTodos(): Observable<Todo[] | []>{
    return this.http.request<Todo[] | []>('GET', this.baseUrl)
  }

}
