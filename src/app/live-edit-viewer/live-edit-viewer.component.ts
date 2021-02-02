import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
@Component({
  selector: 'app-live-edit-viewer',
  templateUrl: './live-edit-viewer.component.html',
  styleUrls: ['./live-edit-viewer.component.css'],
})
export class LiveEditViewerComponent implements OnInit {
  constructor(public serviceCourse: CourseService) {}

  ngOnInit(): void {}
}
