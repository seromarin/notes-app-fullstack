import { Component, inject, signal } from '@angular/core';
import { TodoFormComponent } from "./form/form.component";
import { TodoListComponent } from "./list/list.component";
import { TodosService } from './todos.service';

@Component({
  selector: 'app-todo',
  standalone: true,
  template: `
    <app-todo-form
      (newTodo)="todoService.addNewTodo($event)"
    ></app-todo-form>
    <app-todo-list
      [todos]="todoService.todos()"
      (deleteTodo)="todoService.deleteTodo($event)"
    ></app-todo-list>
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `,
  imports: [TodoFormComponent, TodoListComponent],
})
export class TodoComponent {
  todoService = inject(TodosService);
}
