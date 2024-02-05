import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Todo } from 'src/app/shared/interfaces/todo.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  @Input() todo!: Todo;
  @Input() i!: number;
  @Output() delete = new EventEmitter<void>();

  openModal = false;

  changeTodoStatus(todo: Todo) {
    todo.isComplete = !todo.isComplete;
  }

  toggleModal(): void {
    this.openModal = !this.openModal;
  }

  deleteTodo(): void {
    this.delete.emit();
  }
}
