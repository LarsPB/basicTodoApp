import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todoItem: Todo;
  @Output() todoItemSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  removeItem(){
    this.todoItemSelected.emit();
  }

  ngOnChanges():void{
    console.log("test");
  }

  
}
