import { Component, OnInit } from '@angular/core';
import { ITask } from '../DTO/task'
import { TASKS } from'../../mock-tasks';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: ITask[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
