import { Component, input, output, signal, type Signal } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';

import type { Todo } from '@models/todo.model';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    MatListModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule
  ],
  template: `
    <h2 class="todo-list_title">Today's Tasks</h2>
    <mat-list role="list" class="todo-list_items" #tds>
      @for (todo of todos(); track todo.id) {
        <div class="todo-list_item">
          <mat-list-item>{{todo.body}}</mat-list-item>
          <mat-chip-set aria-label="Fish selection">
            @if (todo.completed) {
              <mat-chip class="tertiary-chips">Completed</mat-chip>
            } @else {
              <mat-chip color="secondary">In Progress</mat-chip>
            }
          </mat-chip-set>
          <mat-checkbox
            [checked]="todo.completed"
            (change)="todo.completed = $event.checked"
          ></mat-checkbox>
          <button
            class="todo-list_item_btn"
            mat-icon-button
            aria-label="Delete todo item"
            (click)="deleteTodo.emit(todo.id)"
          >
            <mat-icon>delete</mat-icon>
          </button>
        </div>
        <mat-divider></mat-divider>
      }
    </mat-list>
  `,
  styles: `
    :host {
      width: 50vw;
    }

    .todo-list {
      &_title {
        font-size: 1.5rem;
        text-align: center;
      }

      &_item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0.5rem 0;
      }
    }
  `
})
export class TodoListComponent {
  todos = input<Todo[]>();

  deleteTodo = output<number>()
}
