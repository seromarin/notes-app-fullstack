import { Injectable, signal } from '@angular/core';
import type { Todo } from '@models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private _todos = signal<Todo[]>([
    {id: 1, body: 'Todo 1', completed: false},
    {id: 2, body: 'Todo 2', completed: true},
    {id: 3, body: 'Todo 3', completed: false},
  ]);

  get todos() {
    return this._todos.asReadonly();
  }

  addNewTodo(todo: string) {
    this._todos.update(todos => [...todos, {id: todos.length + 1, body: todo, completed: false}]);
  }

  deleteTodo(id: number) {
    this._todos.update(todos => todos.filter(todo => todo.id !== id));
  }
}
