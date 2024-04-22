import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { AdminServiceService } from '../service/admin-service.service';


@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {


  AdminEntityData :any
  ngOnInit(): void {

  }
  constructor( private sevice: AdminServiceService,  private route: Router  , private builder:FormBuilder){

    this.AdminEntityData = this.builder.group({
      id: [],
      password: [],
      name: [],
      gender: [],
      contact: [],
      address: [],
      city: [],
      pinCode: [],
      securityKey: [],
    })
  }
  addAdmin() {
    console.log("Form Data ------------", this.AdminEntityData.value);

    this.sevice.AddAdminData(this.AdminEntityData.value).subscribe(
      {
        next:(resp)=>{
          this.redirectToList();
        },
        error:(err)=>{
          console.log(err);
        },
        complete:()=>{
          
        }
      }
    )
    
  }
  redirectToList(){
    this.route.navigate(['getadmin'])
  } 



}
