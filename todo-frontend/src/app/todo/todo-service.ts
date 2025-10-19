import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiURL = "http://localhost:5280";

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]>{
    return this.http.get<Todo[]>(this.apiURL+"/todo");
  }

  createTodo(data: Todo): Observable<Todo>{
    return this.http.post<Todo>(this.apiURL+"/todo", data);
  }

  findTodo(id: string): Observable<Todo>{
    return this.http.get<Todo>(this.apiURL+"/todo/" + id);
  }

  updateTodo(id:string, data: Todo): Observable<Todo>{
    return this.http.put<Todo>(this.apiURL+"/todo/" + id, data);
  }

  deleteTodo(id: number): Observable<Todo>{
    return this.http.delete<Todo>(this.apiURL+"/todo/" + id);
  }
}
