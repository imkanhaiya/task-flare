import { HttpClient, HttpResponse } from '@angular/common/http';
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

  addTodo(todo: Todo): Observable<HttpResponse<Todo>> {
    return this.http.post<Todo>(this.baseUrl, todo, {observe:'response'});
  }

  getTodoDetails(id: Number): Observable<Todo> {
    return this.http.request<Todo>('GET', `${this.baseUrl}/${id}`) 
  }

}
