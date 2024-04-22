import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthMicroService {

  authUrl = "http://localhost:8091/auth"

  constructor(private httpclient: HttpClient) {

  }

  RegisterAdminFrom_Auth(adminData: any) {
    return this.httpclient.post(this.authUrl + "/RegisterAdmin", adminData, { responseType: 'text' })
  }
}
