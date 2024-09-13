import { Component } from '@angular/core';
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
          [(ngModel)]="newTodo"
          name="newTodo"
          class="form-input"
          required
        >
        <button 
          matSuffix
          mat-icon-button
          aria-label="Clear"
          (click)="newTodo=''"
        >
          <mat-icon>close</mat-icon>
        </button>
      </mat-form-field>
    </form>
  `,
  styles: `
    :host {
      padding: 2.5rem 0 0 0;
    }

    mat-form-field {
      width: 50vw;
    }
  `,
})
export class TodoFormComponent {
  newTodo = '';

  onSubmit() {
    console.log('submit');
  }
}
