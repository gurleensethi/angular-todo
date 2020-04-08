import { Injectable } from '@angular/core';
import { Todo } from 'src/typings';

@Injectable()
export class TodoService {
  todos: Todo[] = [];

  addTodo(todo: string) {
    this.todos.push({
      todo,
      timestamp: new Date(),
      isComplete: false,
    });
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  deleteAllTodos() {
    this.todos = [];
  }

  getCompletedTodos() {
    return this.todos.filter((todo) => todo.isComplete);
  }

  getPendingTodos() {
    return this.todos.filter((todo) => !todo.isComplete);
  }

  deleteCompletedTodos() {
    this.todos = this.todos.filter((todo) => todo.isComplete);
  }
}
