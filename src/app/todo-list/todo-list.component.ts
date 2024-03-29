import { Component } from '@angular/core';
import { Todo } from '../shared/interfaces/todo.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  todos: Todo[] = [];
  errorMessage = '';

  addTodo(todo: string): void {
    if (todo.length <= 3) {
      this.errorMessage = 'Zdanie powinno mieć conajmniej 4 znaki';
      return;
    }
    this.todos.push({ name: todo, isComplete: false });
  }

  clearErrorMessage() {
    this.errorMessage = '';
  }

  deleteTodo(i: number) {
    this.todos = this.todos.filter((todo, index) => index !== i);
  }
}
