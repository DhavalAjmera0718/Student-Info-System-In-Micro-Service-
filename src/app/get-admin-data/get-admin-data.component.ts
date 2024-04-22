import { Component,OnInit, ViewChild } from '@angular/core';
import { AdminServiceService } from '../service/admin-service.service';
import { AdminModel } from '../service/admin-model';
import { AdminEntity } from '../service/admin-entity';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatFormField } from '@angular/material/form-field';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-get-admin-data',
  templateUrl: './get-admin-data.component.html',
  styleUrls: ['./get-admin-data.component.css']
})
export class GetAdminDataComponent implements OnInit{

  dataSource: any;
  displayColumns: string[] = ["id", "password", "name", "gender", "dob", "branch", "contact", "address", "city", "pinCode", "securityKey", "action"]
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) matsort !: MatSort;
  @ViewChild(MatFormField) matform!: MatFormField
  
  // adminModelData :AdminModel[];
  adminModelData:any;
  databyid:AdminModel[];
  adminalldata:AdminEntity[];
  id:any
  
constructor(  private adminservice:AdminServiceService , private router : Router)
{
  // this.adminModelData=[];
  this.databyid=[];
  this.adminalldata=[];
  
  this.adminservice.getAllAdminData().subscribe({
    next: (resp) => {
      this.adminModelData = resp;
      console.log(resp)
      this.dataSource = new MatTableDataSource(this.adminModelData);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.matsort;
      // this.dataSource.form=this.matform
      console.log("Data Source--->", this.dataSource)

    },
    error: (err) => {
      console.log(err);
    }
  })
}

  ngOnInit(): void {
  //  this.getStudentData();
  //  this.getAdminData();
  }

  filterchange(data: any) {

    const value = (data.target as HTMLInputElement).value
    this.dataSource.filter = value;

  }

  search(searchValue: string) {
    this.dataSource.filter = searchValue;
  }
 
/**/

  getStudentData()
  {
    this.adminservice.getAllStudentData().subscribe(data => {
      // alert(data)
      this.adminModelData=data;
      console.log(data)
      this.dataSource = new MatTableDataSource(this.adminModelData);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.matsort;
        // this.dataSource.form=this.matform
        console.log("Data Source--->", this.dataSource)
    //  console.error("Admin Model Data --------> " , this.adminModelData)
    })

    /*********************************************[ GET - AdminData  ]***************************************************************/ 
  }
  getAdminData()
  {
    this.adminservice.getAllAdminData().subscribe(data => {
      
     this.adminalldata=data;
     console.log("Admin Data --------> " , data)
    })

  }

  /*********************************************[ GET ADMIN BY ID ]***************************************************************/ 



  getAdminById(id:any)
{
  this.adminservice.getAdminDataById(id).subscribe( data =>{
    console.log("Data------>" , data)
    this.databyid=data;
    console.log("Data By id-------->" , this.databyid)
  })
}

ViewDetailsById(id:any)
{
  this.router.navigate([`viewdata`,id])
}


/*********************************************[ DELETE ADMIN BY ID ]***************************************************************/ 
DeleteAdmin(id:number)
{
  const confirmDelete = confirm("Are you sure you want to delete this data?");
  
  if (confirmDelete) {
    this.adminservice.DeleteAdminByid(id).subscribe(data => {
      alert("Data has been deleted");
      window.location.reload();
      this.goToadminList();
    });
  } else {
    console.log("Deletion cancelled");
  }
}

/*********************************************[ GO TO ADMIN LIST ]***************************************************************/ 
goToadminList()
{
  this.router.navigate(['getadmin'])
}
/*********************************************[ GO TO ADMIN LIST ]***************************************************************/ 
UpdateAdminData(id : any)
{
  this.router.navigate([`update`,id])
}



}
