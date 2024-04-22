import { Component } from '@angular/core';
import { StudentMicroService } from '../service/student-micro.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthMicroService } from '../service/auth-micro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.css']
})
export class RegisterAdminComponent {

  AdminData: any;
  constructor(private AuthService: AuthMicroService, private fb: FormBuilder , private router :Router) {
    this.AdminData = this.fb.group({
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

  RegisterAdmin() {
    this.AuthService.RegisterAdminFrom_Auth(this.AdminData.value).subscribe({
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
    this.RegisterAdmin()
    alert("Admin Data Has Been Save")
    this.router.navigate(['login'])

  }
}
