import { Component, OnInit, Output ,EventEmitter } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {

  students: any;
  @Output() listStudentEvent: EventEmitter<any> = new EventEmitter();

  constructor(private studentService: StudentService) { }
  

  ngOnInit(): void {
    this.getStudents();
  }
  getStudents(){
    this.studentService.getStudents().then(studentDetails=>{
      this.students = studentDetails?.data;
      console.log(this.students);
    })
  }

  
}
