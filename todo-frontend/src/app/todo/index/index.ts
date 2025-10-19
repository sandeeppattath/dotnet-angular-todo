import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Todo } from '../todo';
import { TodoService } from '../todo-service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-index',
  imports: [RouterModule, DatePipe],
  templateUrl: './index.html',
  styleUrl: './index.css'
})
export class Index {
  todos: Todo[] = [];

  constructor(private todoService: TodoService){}

  ngOnInit(): void{
    this.loadTodos();
  }

  loadTodos(){
    this.todoService.getTodos().subscribe((data: Todo[]) => {
    this.todos = data;
    })

  }

  deleteTodo(id: number){
    if(confirm("Are you sure to remove this todo item?")){
      this.todoService.deleteTodo(id).subscribe(()=>{
          this.loadTodos();
      });
    }
  }

}
