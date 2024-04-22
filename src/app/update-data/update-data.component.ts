import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServiceService } from '../service/admin-service.service';
import { AdminEntity } from '../service/admin-entity';

@Component({
  selector: 'app-update-data',
  templateUrl: './update-data.component.html',
  styleUrls: ['./update-data.component.css']
})
export class UpdateDataComponent implements OnInit {
  
  
  id:any;
  
  admindataFromModel : AdminEntity = new AdminEntity();
  constructor(private service:AdminServiceService , private route :Router ,
     private activatedRoute : ActivatedRoute){}
  
  ngOnInit(): void {
   
    this.id = this.activatedRoute.snapshot.params['id']
    this.service.getAdminDataById(this.id).subscribe(data => {
      this.admindataFromModel=data;
    })
  }
  onSubmit(){
    this.service.UpdateAdminById(this.id , this.admindataFromModel).subscribe(data=>{
      alert("Admin Data Hase Been Updated ")
      this.gotoAdminnlist();
    })
  }

  gotoAdminnlist(){
    this.route.navigate([`getadmin`])
  }

}
