import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable()
export class UserLoginService {
  private url: string = "/api/Account/Login";
  formModel = this.formBuilder.group({
    UserName: ['', Validators.required],
    Password: ['', [Validators.required]]
  });
  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  login()
  {
    var body = {
      UserName: this.formModel.value.UserName,
      Password: this.formModel.value.Password,
    };
    return this.http.post(this.url, body);
  }
}
