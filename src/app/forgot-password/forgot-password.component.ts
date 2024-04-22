import { Component } from '@angular/core';
import { LoginService } from '../service/login.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { raceWith } from 'rxjs';
// import {MatDatepickerModule} from '@angular/material/datepicker';
// import {MatInputModule} from '@angular/material/input';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import {MatNativeDateModule} from '@angular/material/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  userdata = {
    email: '',
    dob:''
    
  }
  tableData: any;
  reactiveForm: any;
  otpdata:any
  constructor(private service: LoginService, private fb: FormBuilder, private router: Router) {
    this.otpdata = this.fb.group({
      email:['',Validators.required],
      dob:['',Validators.required]
    })

  }
  ngOnInit(): void {


  }

  // onSubmit() {

  //   this.service.genrateOtp(this.userdata.email , this.userdata.dob).subscribe({
  //     next:(resp)=>
  //     {
  //       alert("OTO Has Been Sent To " + this.userdata.email)
  //       this.router.navigate(['otpgenrate'])
  //       console.log(resp)
  //     },
  //     error:(err)=>
  //     {
  //       alert("Please Check Again..!!")
  //       console.log(err)
  //     }
  //   })

  //   }
  onSubmit() {

    this.service.genrateOtp(this.otpdata.value.email , this.otpdata.value.dob).subscribe({
      next:(resp)=>
      {
        alert("OTO Has Been Sent To " + this.userdata.email)
        this.router.navigate(['otpgenrate'], {
          queryParams: {
            email: this.otpdata.value.email,
            dob: this.otpdata.value.dob
          }
        });

      },
      error:(err)=>
      {
        alert("Please Check Again..!!")
        console.log(err)
      }
    })

    }

   get email()
   {
     return this.otpdata.get('email')
   } 
    
  
}
