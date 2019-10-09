import { Component } from '@angular/core';
import { ITodo } from './interfaces/itodo';
import { TodoService } from './services/todo.service';

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

  constructor( private todoService: TodoService) {}


ngOnInit() {
  this.todoTitle = '';  
  this.todoId= 1;
  this.todoList = this.todoService.todoList;
  this.todoList.push({
   
    id: this.todoId, 
    isDoing: false,
     isEditing:false, 
     title: 'Install Angular CLI', 
     isDone: false, 
     dateAdded: new Date()    
    });
  
  
  
}
addTodo():void {
  this.todoId ++;
  const todo =({  
    id: this.todoId,
    title: this.todoTitle,
    isDone: false,
    isDoing: false,
    isEditing: false,
    dateAdded:new Date()
  });
  this.todoService.add(todo);
  this.todoTitle = '';  
}
toggleDone(todo: ITodo){
  todo.isDone = !todo.isDone;
}

deleteTodo(todo:ITodo) {
  this.todoService.delete(todo);``
}

}