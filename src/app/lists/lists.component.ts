import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
})
export class ListsComponent implements OnInit {
  constructor(public serviceCourse: CourseService) {}
  //varaible d'affichages
  todoList;
  doneList;
  ngOnInit(): void {
    this.todoList = this.serviceCourse.getTodo();
    this.doneList = this.serviceCourse.getDone();
  }
  addCourseDone(e, course) {
    e.preventDefault();
    this.serviceCourse.addCourseDoneList(course);
    this.serviceCourse.removeCourse(course);

    // l'appeler du service
  }
  seeMoreCourse(e, course) {
    e.preventDefault();
  }
  remove(e, course) {
    e.preventDefault();
    this.serviceCourse.remove(course);
  }
}
