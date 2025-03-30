import { Injectable } from '@angular/core';
import { UserDetail } from '../mock/UserData';
import { UserModel } from '../Model/UserModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  validateLogin(user: any): Observable<any> {
    return this.http.post('http://localhost:8000/login', user)
  }
  
  // getCurentUser() : UserModel | null {
  //   return this.currentUser;
  // }
}
