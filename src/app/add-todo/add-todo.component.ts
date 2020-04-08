import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TodoService } from '../todo.service';

interface TodoForm {
  todo: string;
}

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private todoService: TodoService
  ) {
    this.formGroup = this.formBuilder.group({
      todo: '',
    });
  }

  ngOnInit() {}

  addTodo(data: TodoForm) {
    if (data.todo.trim().length > 3) {
      this.todoService.addTodo(data.todo);
      this.formGroup.reset();
    }
  }
}
