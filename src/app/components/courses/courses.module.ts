import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CoursesComponent } from './courses.component';


@NgModule({
  declarations: [
    CoursesListComponent,
    CourseItemComponent,
    CoursesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
  ],
  exports: [
    CoursesComponent
  ]
})
export class CoursesModule { }
