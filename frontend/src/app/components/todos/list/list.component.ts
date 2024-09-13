import { Component, signal } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import { Todo } from '@models/todo.model';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    MatListModule,
    MatDividerModule
  ],
  template: `
    <h2 class="task-list_title">Today's Tasks</h2>
    <mat-selection-list #tds>
      @for (todo of todos(); track todo.id) {
        <mat-list-option>{{todo.body}}</mat-list-option>
        <mat-divider></mat-divider>
      }
    </mat-selection-list>
  `,
  styles: `
    :host {
      width: 50vw;
    }

    .task-list_title {
      font-size: 1.5rem;
      text-align: center;
    }
  `
})
export class TodoListComponent {
  todos = signal<Todo[]>([
    {id: 1, body: 'Todo 1', completed: false},
    {id: 2, body: 'Todo 2', completed: false},
    {id: 3, body: 'Todo 3', completed: false},
  ]);
}
