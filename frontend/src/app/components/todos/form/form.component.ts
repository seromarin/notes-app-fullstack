import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule, 
    MatInputModule, 
    FormsModule, 
    MatButtonModule, 
    MatIconModule,
  ],
  template: `
    <form 
      class="form" 
      (ngSubmit)="onSubmit()" 
      #form="ngForm"
    >
      <mat-form-field class="form-field">
        <mat-label>New Todo</mat-label>
        <input 
          matInput
          type="text"
          [(ngModel)]="todo"
          name="todo"
          class="form-input"
          required
        >
      </mat-form-field>
      <button 
        mat-fab
        aria-label="Clear"
        type="button"
        (click)="clearInput($event)"
      >
        <mat-icon>close</mat-icon>
      </button>
    </form>
  `,
  styles: `
    :host {
      padding: 2.5rem 0 0 0;
    }

    mat-form-field {
      width: 40vw;
      padding: 0 1rem;
    }
  `,
})
export class TodoFormComponent {
  newTodo = output<string>();

  todo = signal('initialValue');

  onSubmit() {
    if (!this.todo().trim()) {
      return;
    }
    this.newTodo.emit(this.todo());
    this.resetTodoValue();
  }

  clearInput(event: Event) {
    event.preventDefault();
    this.resetTodoValue();
  }

  resetTodoValue() {
    this.todo.set('');
  }
}
