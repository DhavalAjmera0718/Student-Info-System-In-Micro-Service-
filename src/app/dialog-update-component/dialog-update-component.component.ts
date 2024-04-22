import { Component,OnInit,Inject  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StudentMicroService } from '../service/student-micro.service';

@Component({
  selector: 'app-dialog-update-component',
  templateUrl: './dialog-update-component.component.html',
  styleUrls: ['./dialog-update-component.component.css']
})
export class DialogUpdateComponentComponent implements OnInit {

  id: any
  studentEntity: any={};
  constructor(private service: StudentMicroService, private activatedRoute: ActivatedRoute, private router : Router, public dialogRef: MatDialogRef<DialogUpdateComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

    onClose(): void {
      this.dialogRef.close();
    }
 
  ngOnInit(): void {
    this.id = this.data.name;
    this.service.GetStudentById(this.id).subscribe(
      (resp) => {
        // alert("resp--->" + resp)
        this.studentEntity = resp;
        console.log(resp);
      },
      (error) => console.log(error)
    );
  }

  // reactiveForm = new FormGroup({
  //   name: new FormControl(),
  //   password: new FormControl('dhaval', [Validators.required, Validators.minLength(5)]),
  //   contact: new FormControl('dhaval@gmail.com', [Validators.email]),
  //   enrollmentNo: new FormControl(),
  //   gender: new FormControl(),
  //   branch: new FormControl(),
  //   city: new FormControl(),
  //   address: new FormControl(),
  //   pinCode: new FormControl(),
  //   securityKey: new FormControl(),
  //   role: new FormControl(),

  // })
  onSubmit()
  {
    this.service.updateById(this.id , this.studentEntity).subscribe( data2 => {
      alert("Data has been Updated")
      // this.onClose();
      // window.location.reload()
    })
  }
  // get user() {
  //   return this.reactiveForm.get('user')
  // }
  // get password() {
  //   return this.reactiveForm.get('password')
  // }
  // get email() {
  //   return this.reactiveForm.get('email')
  // }

}
