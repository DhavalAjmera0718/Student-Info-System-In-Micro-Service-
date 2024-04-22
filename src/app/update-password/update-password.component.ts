import { Component,OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {

  

  

  reactiveForm: any;
  constructor(private service: LoginService, private fb: FormBuilder, private router: Router) {

this.reactiveForm=this.fb.group({

  password:['',Validators.minLength(8)],
  // reEnterPassword:['',Validators.minLength(8)],
  username:['',Validators.required]

})
    
  }
  ngOnInit(): void {

  }


UpdatePasswordByUsername()
{
  alert("run");
 this.service.updatePassword(this.reactiveForm.value.username , this.reactiveForm.value.password ).subscribe({
  next:(resp)=>{
    if(resp==='Password Hase Been Changed'){
      alert("Password Updated Successfully!")
      this.router.navigate(['login'])
      
    }
  },
  error:(err)=>{
    alert(err);
  }
 })
 
}








get password()
{
  return this.reactiveForm.get('password')
}
get reEnterPassword()
{
  return this.reactiveForm.get('reEnterPassword')
}
get username()
{
  return this.reactiveForm.get('username')
}

}
