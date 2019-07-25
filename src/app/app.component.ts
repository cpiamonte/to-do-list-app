import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'to-do-list-app';
  tasks = [];
  taskName = '';

  constructor() {

  }

  ngOnInit() {
  }

  onAddItem() {
    this.tasks.push(this.taskName);
    this.taskName = null;
  }

  onKeydown() {
    if (this.taskName !== '') {
      this.tasks.push(this.taskName);
    }
  }

  onRemoveItem(i) {
    this.tasks.splice(i, 1);
  }
}
