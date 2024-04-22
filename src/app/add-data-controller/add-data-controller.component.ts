import { Component } from '@angular/core';
import { AdminServiceService } from '../service/admin-service.service';
import { AdminModel } from '../service/admin-model';
import { Router } from '@angular/router';
import { AdminEntity } from '../service/admin-entity';

@Component({
  selector: 'app-add-data-controller',
  templateUrl: './add-data-controller.component.html',
  styleUrls: ['./add-data-controller.component.css']
})
export class AddDataControllerComponent {

  adminModelData : AdminEntity =  new AdminEntity();
constructor( private service:AdminServiceService , private router:Router)
{}

addAdminData()
{
  this.service.AddAdminData(this.adminModelData).subscribe(data=> {
    console.log(data);
    this.goToadminList();
  })
}

onSubmit()
{
  this.addAdminData();
}
goToadminList()
{
  this.router.navigate(['getadmin'])
}





}
