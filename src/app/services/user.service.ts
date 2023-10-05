import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  userURL: string = "http://localhost:3000/users";
  constructor(private http: HttpClient) { }
  displayAllUsers() {
    return this.http.get(this.userURL);
  }
  getUserById(id: number) {
    return this.http.get(`${this.userURL}/${id}`);
  }
  signup(obj: any) {
    return this.http.post<{msg : boolean}>(this.userURL + "/signup", obj)
  }
  logIn(obj: any) {
    return this.http.post<{ msg: string, token: string }>(this.userURL + "/login", obj)
  }
  deleteUserById(id: number) {
    return this.http.delete(`${this.userURL}/${id}`)
  }
  editUserById(obj: any) {
    return this.http.put(this.userURL, obj)
  }

}
