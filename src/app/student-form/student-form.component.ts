import { Component, OnInit, Output ,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  studentForm!: FormGroup;
  isSubmitted: boolean = false;
  isError: boolean = false;
  constructor(
    private fb: FormBuilder,
    private studentService: StudentService) { }
  ngOnInit(): void {
    this.studentForm = this.fb.group({
      name: [''],
      dob: [''],
      standard: [''],
      division: [''],
      gender: ['']
    })
  }

  onStudentSubmit() {
    this.studentService.postStudent(this.studentForm.value).then(apiReturn => {
      if (apiReturn.status == 200) {
        this.isSubmitted = true;
        this.studentForm.reset();
      }else{
        this.isError = true;
      }
    });
  }

}
