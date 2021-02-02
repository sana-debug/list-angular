import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
@Component({
  selector: 'add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})
export class AddCourseComponent implements OnInit {
  constructor(private serviceCourse: CourseService) {}

  ngOnInit(): void {}
  markdown = '';
  onSubmitForm(form) {
    let id = Date.now(); //gerer un id aleatoire
    let course = form.value; // {tile: , content: }
    course.id = id;
    console.log(course);
    form.reset();
    this.serviceCourse.createCourse(course);
    //envoyer le objet course dans la listCourse dans le service
  }

  /*
    function éxécutée au focus sur l'input ou le textarea
  */
  onFocusInput() {
    console.log('focus');
    this.serviceCourse.userIsEditing = true;
  }
  onBlurInput() {
    console.log('blur');
    this.serviceCourse.userIsEditing = false;
    //this.courseService.setMarkdown("");
  }
  onKeyupTextarea(markdown) {
    this.serviceCourse.setMarkdown(markdown);
  }

  //fin de la classe
}
