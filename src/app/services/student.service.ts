import { Injectable } from '@angular/core';
import axios from 'axios';
const instance = axios.create();

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseUrl = `http://localhost:8080/api/v1/student`;
  constructor() { }

  getStudents() {
    return instance.get(this.baseUrl);
  }
  postStudent(student: any){
    return instance.post(this.baseUrl,student);
  }
}
