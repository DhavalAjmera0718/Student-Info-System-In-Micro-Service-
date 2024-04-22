import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StudentMicroService } from '../service/student-micro.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css']
})
export class StudentRegisterComponent implements OnInit {


  studentData: any;
  constructor(private studentService: StudentMicroService, private fb: FormBuilder) {
    this.studentData = this.fb.group({
      email: ['', Validators.email],
      name: ['', Validators.required],
      // role: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]], // Example of using multiple validators
      dob: ['', Validators.required],
    })
  }

  ngOnInit(): void { }

  // reactiveForm = new FormGroup({
  //   enRoll: new FormControl('dhaval@gmail.com', [Validators.email]),
  //   name: new FormControl(),
  //   role: new FormControl(),
  //   password: new FormControl('dhaval', [Validators.required, Validators.minLength(5)]),
  //   securityKey: new FormControl(),

  // })

  RegisterStudent() {
    this.studentService.RegisterStudent(this.studentData.value).subscribe({
      next: (resp) => {
        // this.studentData = resp;
        console.log(resp)
        location.reload()
      },
      error: (err) => {
        alert("Error While Register Please Try Again..!!")
      }
    })
  }
  onSubmit() {
    this.RegisterStudent()
    alert("Student Data Has Been Save")
  }






}
