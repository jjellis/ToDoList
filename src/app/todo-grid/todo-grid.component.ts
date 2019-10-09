import { Component, OnInit, ViewChild } from '@angular/core';
import { ITodo } from '../interfaces/itodo';
import { TodoService } from '../services/todo.service';
import{MatTable} from '@angular/material';

@Component({
  selector: 'app-todo-grid',
  templateUrl: './todo-grid.component.html',
  styleUrls: ['./todo-grid.component.scss']
})
export class TOdoGridComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  todos: ITodo[]= this.todoService.getAll();
  columnsToDisplay: string[] = ["title", "isDone", "isDoing", "isEditing"];
  @ViewChild(MatTable, {static:true}) table: MatTable<ITodo>;

  ngOnInit() {
  }

}
