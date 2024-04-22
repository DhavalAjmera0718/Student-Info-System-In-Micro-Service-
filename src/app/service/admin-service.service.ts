import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminModel } from './admin-model';
import { AdminEntity } from './admin-entity';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {


id:any;

  constructor( private httpclients: HttpClient) { }

  private baseUrl:string = "http://localhost:8095/admin/admin";


  getAllStudentData() : Observable<AdminModel[]>
  {
    return this.httpclients.get<AdminModel[]>(`${this.baseUrl}/getAllUser`)
  }
  getAllAdminData() : Observable<AdminEntity[]>
  {
    return this.httpclients.get<AdminEntity[]>(  this.baseUrl+ "/"+"getalladminData")
  }
  
  getAdminDataById(id:number) :Observable<any>{
    return this.httpclients.get(this.baseUrl + "/getAdmin/"+ id)
  }


 AddAdminData(add_AdminData :any) : Observable<Object>
 {
  return this.httpclients.post(this.baseUrl + "/"+"register_admin",add_AdminData , {responseType : 'text'});
 }

 DeleteAdminByid(id:number)
 {
  return this.httpclients.get(this.baseUrl + "/delete_admin/"+ id , {responseType : 'text'})
 }

 UpdateAdminById(id:any , postdata:any)
 {
  return this.httpclients.put(this.baseUrl+"/updateAdmin/"+id , postdata , {responseType : 'text'})
 }

}
