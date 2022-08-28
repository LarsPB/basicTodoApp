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
    new Todo("afwassen")
  ];

  constructor() {
  }

  ngOnInit(): void {
    // this.scrollBox.nativeElement.scrollIntoView({behavior: 'smooth'});
  }



  addTask(){
    this.todoItems.push(new Todo(this.taskInput.nativeElement.value));
    this.taskInput.nativeElement.value = '';
    this.hasInput = "";
  }

}
