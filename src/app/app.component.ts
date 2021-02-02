import { Component } from '@angular/core';
import { CourseService } from './course.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public serviceCourse: CourseService, private Auth: AuthService) {}
  title = 'course-list';
  display = false;
}
