import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  standalone: true,
  template: `
    <ng-content />
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `,
})
export class TodoComponent {

}
