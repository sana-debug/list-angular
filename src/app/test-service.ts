import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  todoList = [{id:1,title:'JavaScript',content:'C un langage js front '}];
  doneList = [{id:1,title:'Angular',content:'C un langage js front '}];
  STORAGE_KEY = 'local_todolist';
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  /* getter er setter CRUD */
  
  getTodo(){
    return this.todoList;
    console.log('fdsfsd');
  }

  createCourse(couseObject){

    this.todoList.unshift(couseObject)
    console.log('ds'+this.todoList)
  }
  addCourseDoneList(couseObject){
    this.doneList.unshift(couseObject);
   
  }
  removeCourse(couseObject){
    let index= this.todoList.indexOf(couseObject.id);
    this.todoList.splice(index,1);
    
  }
  getDone(){
    return this.doneList;
    console.log('fdsfsd');
  }
  
}
