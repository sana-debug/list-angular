import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import {
  LOCAL_STORAGE,
  StorageService,
  JsonStorageTranscoder,
} from 'ngx-webstorage-service';
import { JsonPipe } from '@angular/common';
@Injectable({
  providedIn: 'root',
})
export class CourseService {
  todoList = [
    { id: 1, title: 'Angular', content: 'C un langage js front ' },
    { id: 1, title: 'html', content: 'C un langage js front ' },
  ];
  result = [];
  doneList = [{ id: 1, title: 'Angular', content: 'C un langage js front ' }];
  STORAGE_KEY = 'local_todolist';
  markdown;
  userIsEditing = false;
  isFinding = false;

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {}

  /* getter er setter CRUD */

  getTodo() {
    if (
      localStorage.getItem('setCourse') != null &&
      localStorage.getItem('setCourse') != ''
    ) {
      this.todoList = [...JSON.parse(localStorage.getItem('setCourse'))];
    }
    return this.todoList;
  }

  createCourse(couseObject) {
    this.todoList.unshift(couseObject);
    localStorage.setItem('setCourse', JSON.stringify(this.todoList));
    //console.log('ds'+this.todoList)
  }
  addCourseDoneList(couseObject) {
    this.doneList.unshift(couseObject);
  }
  removeCourse(couseObject) {
    let index = this.todoList.indexOf(couseObject.id);
    this.todoList.splice(index, 1);
    localStorage.setItem('setCourse', JSON.stringify(this.todoList));
  }
  getDone() {
    return this.doneList;
    console.log('fdsfsd');
  }
  /*
    Gerer le markdown
  */
  setMarkdown(markdown) {
    console.log('servmark', markdown);
    this.markdown = markdown;
  }
  remove(couseObject) {
    let index = this.todoList.indexOf(couseObject.id);
    this.todoList.splice(index, 1);
    localStorage.setItem('setCourse', JSON.stringify(this.todoList));
  }
}
