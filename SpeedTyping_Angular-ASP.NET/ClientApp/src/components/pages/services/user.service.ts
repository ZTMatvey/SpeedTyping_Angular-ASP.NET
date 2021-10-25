import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = "/api/Account/UserInfo";
  userName: string = "";
  isAuthorized: boolean = false;
  constructor(private http: HttpClient) {
    this.update();
    this.updateAuthorized();
  }

  private updateAuthorized(){
    this.isAuthorized = localStorage.getItem("token") !== null;
  }
  update() {
    if(!localStorage.getItem("token"))
      return;
    var token = localStorage.getItem("token");    
    var header = new HttpHeaders({"Authorization": "Bearer " + token});
    this.http.get(this.url, { headers: header }).subscribe((response: any)=> {
      this.userName = response.userName;
      }, error => {console.log(error);});
  }
}
