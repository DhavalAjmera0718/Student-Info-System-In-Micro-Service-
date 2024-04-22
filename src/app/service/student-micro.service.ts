import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentMicroService implements OnInit{

  authUrl = "http://localhost:8091/auth"
  adminUrl= "http://localhost:8090/admin/admin"
  basurlUser  = "http://localhost:8092/user/user"


  constructor(private httpclient : HttpClient){}
  ngOnInit(): void {
  
  }

/************************************************[ PARTIAL REGISTRASTION FOR LOGIN]*********************************************************************/ 
  RegisterStudent(studentData:any)
  {
    return this.httpclient.post(this.authUrl + "/RegisterUser", studentData , {responseType : 'text'})
  }
/************************************************[ STUDENT DETAIL REGISTRASTION AFTER LOGIN ]*********************************************************************/ 


RegisterUser_Details(obj:any){

  return this.httpclient.post(this.basurlUser+"/register-user" , obj , {responseType : 'text'})
}


/************************************************[ GET ALL STUDENT FROM ADMIN SERVICE  ]*********************************************************************/ 
getAllUserData() 
{
  return this.httpclient.get(this.basurlUser+"/getAllUser" , {responseType : 'json'})
}


/************************************************[ UPDATE  STUDENT FROM STUDENT SERVICE  ]*********************************************************************/ 

GetStudentById(id:any) : Observable<any>
{
  return this.httpclient.get(this.basurlUser+"/getUser/" + id);
}
updateById(id:any , studentdata:any)
{
return this.httpclient.post(this.basurlUser + "/updateUser/" + id ,studentdata , {responseType : 'text'})
}




}
