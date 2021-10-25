import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserRegistrationService {
  private url: string = "/api/Account/Register";

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  formModel = this.formBuilder.group({
    UserName: ['', Validators.required],
    Email: ['', [Validators.required, Validators.email]],
    Passwords: this.formBuilder.group({
      Password: ['', [Validators.required, Validators.minLength(6)]],
      ConfirmPassword: ['', Validators.required],
    }, {validator: this.comparePasswords})
  });
  private comparePasswords(fg: FormGroup){
    let confirmPasswordControl = fg.get("ConfirmPassword");
    let errors = confirmPasswordControl?.errors;
    if(!errors || "passwordMismatch" in errors){
      let passwordControl = fg.get("Password");
      if(passwordControl?.value !== confirmPasswordControl?.value)
        confirmPasswordControl?.setErrors({passwordMismatch: true});
      else confirmPasswordControl?.setErrors(null);
    }
  }
  register(){
    if(!this.formModel.valid)
      return;
    var body = {
      UserName: this.formModel.value.UserName,
      Email: this.formModel.value.Email,
      Password: this.formModel.value.Passwords.Password,
    };
    this.http.get("/api/Account/Get");
    this.http.get("/api/texts/all");
    return this.http.post(this.url, body);
  }
}
