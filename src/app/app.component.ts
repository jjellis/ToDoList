import { Component } from '@angular/core';
import { ITodo } from './interfaces/itodo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Todos';
  todoList: ITodo [] = [];
  todoTitle: string;
  todoId: number;


ngOnInit() {
  this.todoTitle = '';  
  this.todoId= 1;
  this.todoList = [
    // example of how to make an item in todo list
    {id: 1, isDoing: false, isEditing:false, title: 'Install Angular CLI', isDone: false },
    
  ];
  
}
addTodo():void {
  this.todoId ++;
  this.todoList.push({
    id: this.todoId,
    title: this.todoTitle,
    isDone: false,
    isDoing: false,
    isEditing: false,
  });

  
  this.todoTitle = '';
  this.todoId++;
}
deleteTodo(todo:any) {
  const index = this.todoList.findIndex(todoItem => todoItem === todo);
  this.todoList.splice(index, 1);
}

}