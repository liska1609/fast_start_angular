import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  public searchText: string = '';
  
  public serarchCourse(): void {
    console.log(this.searchText);
  }

  public addCourse(): void {
    console.log('add course');
  }

}
