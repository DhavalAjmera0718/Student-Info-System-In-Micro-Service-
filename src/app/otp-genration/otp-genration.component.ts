import { Component } from '@angular/core';
import { LoginService } from '../service/login.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-otp-genration',
  templateUrl: './otp-genration.component.html',
  styleUrls: ['./otp-genration.component.css']
})
export class OTPGenrationComponent {


  userdata = {
    email: '',
    otp: '',
    dob: Date
  }


  reactiveForm: any;
  constructor(private service: LoginService, private fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute) {

    this.activatedRoute.queryParams.subscribe(params => {

      const emaildata = params['email'];
      console.log("Email -----> ", emaildata)
      const dobdata = params['dob'];
      console.log("Dob -----> ", dobdata)


      this.reactiveForm = this.fb.group({
        // email: [ { value: emaildata, disabled: !!emaildata }, Validators.email],
        email: [ emaildata, Validators.email],
        otp: ['', Validators.maxLength(4)],
        dob: [dobdata]
      })
    });


  }
  ngOnInit(): void {

  }
 

  // onSubmit() {

  //   this.service.genrateOtp(this.reactiveForm.email).subscribe({
  //     next:(resp)=>
  //     {
  //       alert(resp)
  //     },
  //     error:(err)=>
  //     {
  //       console.log(err)
  //     }
  //   })

  //   }


  verifyOtp() {
    this.service.verifyOtp(this.reactiveForm.value.email, this.reactiveForm.value.otp, this.reactiveForm.value.dob).subscribe(
      data => {
        alert("Please Check Your Mail")
        console.log(data);
        this.router.navigate(['login'])
      },
      err => {
        console.log(err);
      }

    )
  }

  getForgotLink() {
    this.service.getLink(this.reactiveForm.value.email, this.reactiveForm.value.otp, this.reactiveForm.value.dob).subscribe(
      data => {
        alert("Link Has Been Sent To Your Registered Mail..!!")
        console.log(data);

      },
      err => {
        console.log(err);
        alert("OTP Expired..!!!")
      }

    )
  }

  get email() {
    return this.reactiveForm.get('email')
  }
  get otp() {
    return this.reactiveForm.get('otp')
  }

}
