import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
@Component({
  selector: 'app-search-course',
  templateUrl: './search-course.component.html',
  styleUrls: ['./search-course.component.css'],
})
export class SearchCourseComponent implements OnInit {
  constructor(private serviceCourse: CourseService) {}
  courseTemp = [];
  //courseName = '';
  ngOnInit(): void {
    this.courseTemp = this.serviceCourse.getTodo();
  }

  searchCourse(form) {
    let searchKey = form.value.course_name;
    //console.log(this.courseTemp);
    console.log(searchKey);
    if (searchKey == null) {
      this.serviceCourse.result = this.serviceCourse.getTodo();
    } else {
      this.serviceCourse.result = this.courseTemp.filter(
        (word) => word.title == searchKey
      );
      this.serviceCourse.isFinding = true;
    }
    form.reset();

    //let result = this.serviceCourse.todoList;
    //this.serviceCourse.todoList = [];
  }
}
