import { Component, OnInit } from '@angular/core';
import { AdminEntity } from '../service/admin-entity';
import { ActivatedRoute } from '@angular/router';
import { AdminServiceService } from '../service/admin-service.service';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.css']
})
export class ViewDataComponent implements OnInit{


  id:any;
  adminData : AdminEntity =  new AdminEntity();
  constructor(private activated :ActivatedRoute , private service : AdminServiceService)
  {}
  ngOnInit(): void {
    this.id=this.activated.snapshot.params['id'];
    this.adminData= new AdminEntity();
    this.service.getAdminDataById(this.id).subscribe(data => {
     this.adminData = data;
    })
    
  }

// getDataById()
// {
//   this.id=this.activated.snapshot.params['id']
//     this.service.getAdminDataById(this.id).subscribe(data=>{
//       console.log("Data From Get Data By Id ---->" , data)
//       this.adminData=data;
//     })
// }



}
