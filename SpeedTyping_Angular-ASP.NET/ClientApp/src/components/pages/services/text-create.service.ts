import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TextsService } from './texts.service';

@Injectable({
  providedIn: 'root'
})
export class TextCreateService {
  private url: string = "/api/AdminPanel/CreateText";
  formModel = this.formBuilder.group({
    Id: [0],
    LanguageId: [0, Validators.required],
    Title: ['', Validators.required],
    Content: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder, 
    private http: HttpClient, 
    private router: Router) { }

  create(){
    if(!this.formModel.valid)
      return;
    var body = {
      Title: this.formModel.value.Title,
      Content: this.formModel.value.Content,
      Id: this.formModel.value.Id,
      Language: parseInt(this.formModel.value.LanguageId),
    };
    var token = localStorage.getItem("token");    
    var header = new HttpHeaders({"Authorization": "Bearer " + token});
    this.router.navigateByUrl("/admin-panel");
    return this.http.post(this.url, body, { headers: header });
  }
}
