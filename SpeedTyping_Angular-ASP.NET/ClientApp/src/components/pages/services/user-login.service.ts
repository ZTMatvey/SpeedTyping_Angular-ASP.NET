import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserLoginService {
  private url: string = "/api/Account/Login";
  userName: string = "";
  password: string = "";
  constructor(private http: HttpClient) { }

  login()
  {
    var body = {
      UserName: this.userName,
      Password: this.password,
    };
    return this.http.post(this.url, body);
  }
}
