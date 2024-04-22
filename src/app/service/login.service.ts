import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  
  constructor(private httpclient: HttpClient) { }



  // CALL SERVER TO GENERET TOKEN 



  authUrl = "http://localhost:8091/auth"
  adminUrl= "http://localhost:8090/admin"

/*********************************************[ For AUTHENTICATION ] **************************************************************/
  TokenGeneration(loginData: any) //:Observable<any>
  {

    return this.httpclient.post(this.authUrl + "/login" ,loginData)


  }

  LoginUser(loginData: any) {
    localStorage.setItem("jwtToken", loginData)
    const decodedData: any = jwtDecode(loginData);
    const username = decodedData.user_name;
    
    alert ( "Decoded Authorities---->" + decodedData.authorities)
    const authorities = decodedData.authorities[0]; // Extracting authorities from token payload
    const payload = { username, authorities }; // Creating payload object
    
    localStorage.setItem('username', username);
    localStorage.setItem('role', authorities);
    // window.location.reload();
    return payload;
   
    // this.httpclient.post(this.basUrl + "/login1" , loginData , {responseType : 'text'})
  }

  // TO  CHECK USER IS LOGGED IN OR NOT
  isLoggedIn() {
    let tokenVerified = localStorage.getItem("jwtToken")
    if (tokenVerified == undefined || tokenVerified === '' || tokenVerified == null) {
      return false;
    }
    else {
      return true;
    }
  }


  LogOut() {
    localStorage.removeItem('jwtToken')
    return true
  }

  getToken() {
    return localStorage.getItem('jwtToken')
  }
/**************************************[ FORGOT PASSWORD  ]***********************************************************************************/ 

genrateOtp(emailId:any , dob:any)
{
  // return this.httpclient.post(this.authUrl+"/sendotp",emailId , {responseType : 'text'} )
  return this.httpclient.post(this.authUrl+"/sendotp/"+emailId +"/"+dob, {responseType : 'text'} )
}

verifyOtp(email:any , otp:any , dob:any)
{
  return this.httpclient.get(this.authUrl + "/verifyotp" + "/" +email + "/"+ otp + "/"+  dob , {responseType :  'text'})
}

/**************************************[ Update Password ]***********************************************************************************/ 
updatePassword(username:any , password:any) 
{
  return this.httpclient.post(this.authUrl +"/updatepass/" + username,password ,{responseType:'text'} )
}

/*****************************************[ GTE LINK ]*****************************************************************/


getLink(email:any , otp:any , dob:any)
{
  return this.httpclient.get(this.authUrl + "/verifyotp" + "/" +email + "/"+ otp + "/"+  dob , {responseType :  'text'})
}

}

