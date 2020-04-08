import { Injectable, OnDestroy } from '@angular/core';
import { Todo } from 'src/typings';

@Injectable()
export class TodoService {
  todos: Todo[] = [];

  constructor() {
    const todoStr = localStorage.getItem('todos');
    if (todoStr) {
      this.todos = JSON.parse(todoStr);
    }
  }

  private updateDataInLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  addTodo(todo: string) {
    this.todos.push({
      todo,
      id: `${Date.now()}-${Math.random() * Math.random() * Math.random()}`,
      timestamp: new Date(),
      isComplete: false,
    });
    this.updateDataInLocalStorage();
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  deleteAllTodos() {
    this.todos = [];
    this.updateDataInLocalStorage();
  }

  getCompletedTodos() {
    return this.todos.filter((todo) => todo.isComplete);
  }

  getPendingTodos() {
    return this.todos.filter((todo) => !todo.isComplete);
  }

  deleteCompletedTodos() {
    this.todos = this.todos.filter((todo) => todo.isComplete);
    this.updateDataInLocalStorage();
  }

  toggleTodo(todo: Todo) {
    const searchedTodo = this.todos.find((t) => t.id === todo.id);
    if (searchedTodo) {
      searchedTodo.isComplete = !searchedTodo.isComplete;
    }
    this.updateDataInLocalStorage();
  }
}
