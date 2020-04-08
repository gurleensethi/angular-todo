import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from 'src/typings';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  constructor(private todoService: TodoService) {}

  get completedTodos(): Todo[] {
    return this.todoService.getCompletedTodos();
  }

  get pendingTodos(): Todo[] {
    return this.todoService.getPendingTodos();
  }

  ngOnInit(): void {}
}
