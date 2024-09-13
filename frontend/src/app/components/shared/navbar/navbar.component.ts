import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule,
  ],
  template: `
    <mat-toolbar class="toolbar">
      <h1 id="title" class="toolbar_title">My Todo App</h1>
      <span class="toolbar_spacer"></span>
      <button 
        mat-icon-button 
        class="toolbar_theme-icon favorite-icon" 
        aria-label="Icon button to switch between light and dark themes"
      >
        <mat-icon>check</mat-icon>
      </button>
      <button 
        mat-icon-button 
        class="toolbar_mark-all-icon" 
        aria-label="Icon button to mark all todos as complete"
      >
        <mat-icon>dark_mode</mat-icon>
      </button>
    </mat-toolbar>
  `,
  styles: `
    .toolbar {
      &_spacer {
        flex: 1 1 auto;
      }
    }
  `
})       
export class NavbarComponent {

}