import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = "/api/Account/UserInfo";
  userName: string = "";
  private _isAuthorized: boolean | null = null;
  data?: User;
  constructor(private http: HttpClient) {
    this.update();
  }

  private updateAuthorized(){
    this._isAuthorized = localStorage.getItem("token") !== null;
  }
  public get isAuthorized() {
    if(this._isAuthorized === null)
      this.updateAuthorized();      
    return this._isAuthorized;
  }
  async update() {
    if (!localStorage.getItem("token"))
      return;
    try {
      this.data = await this.getUserInfo();
      console.log(this.data.userName);
      this.userName = this.data.userName;
      this.updateAuthorized();
    }
    catch (err) {
      console.log(err);
      this.logout();
    }
  }
  private getUserInfo(){
    var token = localStorage.getItem("token");    
    var header = new HttpHeaders({"Authorization": "Bearer " + token});
    return this.http.get<User>(this.url, { headers: header }).toPromise();
  }
  logout()
  {
    localStorage.removeItem("token");
    this.updateAuthorized();
  }
}
