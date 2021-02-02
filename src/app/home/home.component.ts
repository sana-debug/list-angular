import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(public serviceCourse: CourseService, private user: UserService) { }
  message = 'loading ...';
  ngOnInit(): void {
    this.user.getSomeData().subscribe(data => {
      this.message = data.message;

    })

  }
  title = 'course-list';
  display = false;


}
