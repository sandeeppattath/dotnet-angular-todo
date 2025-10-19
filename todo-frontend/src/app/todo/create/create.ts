import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { TodoService } from '../todo-service';

@Component({
  selector: 'app-create',
  imports: [RouterModule, FormsModule],
  templateUrl: './create.html',
  styleUrl: './create.css'
})
export class Create {
  title = '';
  date = '';
  error = '';

  constructor(private todoService: TodoService, private router: Router){}

  submit(){
    if(!this.title){
      this.error = "Title is required.";
      return;
    }

    const input = {
      id: 1,
      title: this.title,
      date: new Date(),
      isCompleted: false
    };

    this.todoService.createTodo(input).subscribe({
      next: (res) => {
        alert("Todo created");
        this.router.navigate(['todos']);
      },
      error: (err) => {
        console.error(err);
        this.error = "Failed to create todo. Please try again.";
      }

    });

    this.router.navigate(['todos']);
  }
}
