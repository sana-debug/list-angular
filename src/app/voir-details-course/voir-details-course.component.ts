import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';
@Component({
  selector: 'voir-details-course',
  templateUrl: './voir-details-course.component.html',
  styleUrls: ['./voir-details-course.component.css'],
})
export class VoirDetailsCourseComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private serviceCourse: CourseService
  ) {}
  public id;
  public title;
  public content;
  public course;
  ngOnInit(): void {
    this.loadCourse();

    //this.serviceCourse.todoList = this.serviceCourse.getTodo();
    //console.log(this.serviceCourse.todoList);
    this.serviceCourse.isFinding = false;
  }
  loadCourse() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.course = this.serviceCourse.todoList.find(
      (item) => item.id == this.id
    );
    this.title = this.course.title;
    this.content = this.course.content;
  }
}
