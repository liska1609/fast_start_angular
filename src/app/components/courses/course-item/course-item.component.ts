import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from 'src/app/model/interface';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent {
  @Input() public course: Course = {} as Course;
  @Output() public edit: EventEmitter<Course> = new EventEmitter<Course>();
  @Output() public delete: EventEmitter<Course> = new EventEmitter<Course>();

  public editCourse(): void {
    this.edit.emit(this.course);
  }

  public deleteCourse(): void {
    this.delete.emit(this.course);
  }
}
