import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../todo.model';


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  @ViewChild('taskInput') taskInput: ElementRef;
  // @ViewChild('scrollBox') scrollBox: ElementRef;
  hasInput:string = "";
  
  todoItems:Todo[] = [
    new Todo("Afwassen")
  ];

  constructor() {
  }

  ngOnInit(): void {
    const ding = localStorage.getItem("Todos");
    this.todoItems = JSON.parse(ding!);
    // this.scrollBox.nativeElement.scrollIntoView({behavior: 'smooth'});
  }

  ngOnChanges():void{
  }

  addTask(){
    this.taskInput.nativeElement.value = this.taskInput.nativeElement.value.charAt(0).toUpperCase() + this.taskInput.nativeElement.value.slice(1);
    this.todoItems.push(new Todo(this.taskInput.nativeElement.value));
    this.taskInput.nativeElement.value = '';
    this.hasInput = "";
    localStorage.setItem("Todos", JSON.stringify(this.todoItems));
  }

  onTodoItemSelected(todoItem:Todo){
    const index = this.todoItems.indexOf(todoItem);
    this.todoItems.splice(index, 1);
    localStorage.setItem("Todos", JSON.stringify(this.todoItems));
  }

}
