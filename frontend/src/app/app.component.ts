import { Component } from '@angular/core';
import { NavbarComponent } from "@components/shared/navbar/navbar.component";
import { TodoComponent } from "@components/todos/todos.component";
import { TodoFormComponent } from "@components/todos/form/form.component";
import { TodoListComponent } from "@components/todos/list/list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, TodoComponent, TodoFormComponent, TodoListComponent],
  template: `
    <app-navbar></app-navbar>
    <app-todo></app-todo>
  `,
  styles: [],
})
export class AppComponent {
}
