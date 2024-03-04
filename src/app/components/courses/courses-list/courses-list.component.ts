import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Course } from 'src/app/model/interface';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  public courses: Course[] = [];

  public ngOnChanges(): void {
    console.log('ngOnChanges');
  }

  public ngOnInit(): void {
    console.log('ngOnInit');
    this.courses = [
      {
        id: 1,
        title: 'Title',
        creation_date: '29 февраля 2024',
        duration: '3 часа 52 минуты',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!',
        ready: true,
      },
      {
        id: 2,
        title: 'Title',
        creation_date: '29 февраля 2024',
        duration: '3 часа 52 минуты',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!',
        ready: true,
      },
      {
        id: 3,
        title: 'Title',
        creation_date: '29 февраля 2024',
        duration: '3 часа 52 минуты',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!',
      }, 
    ]
  }

  public ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  public ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  public ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  public ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  public ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }


  public ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  public loadMore(): void {
    console.log('load more');
  }

  public editCourse(course: Course): void {

  }

  public deleteCourse(course: Course): void {

  }
}
