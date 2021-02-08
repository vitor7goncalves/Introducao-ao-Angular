import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({ 
    templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit{

    filteredCourses: Course[] = [];

     _courses: Course[] = []; 

     _filter: string;

     constructor(private courseSService: CourseService) {}

     ngOnInit(): void{ 
      this._courses = this.courseSService.retrieveAll()
      this.filteredCourses = this._courses;
     }
     set filter(value: string){
        this._filter = value;

        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filter.toLocaleLowerCase()) > -1); 
     }
     get filter(){
         return this._filter;
     }
}