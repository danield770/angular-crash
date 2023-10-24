import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input() task: Task | null = null;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;
  onDelete(task: Task | null) {
    // console.log(task);
    if (!task) return;
    this.onDeleteTask.emit(task);
  }
  onToggle(task: Task | null) {
    if (!task) return;
    this.onToggleReminder.emit(task);
  }
}
