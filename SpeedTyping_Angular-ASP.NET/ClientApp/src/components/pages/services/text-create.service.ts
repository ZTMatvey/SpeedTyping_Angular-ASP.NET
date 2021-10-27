import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TextCreateService {
  private url: string = "/api/AdminPanel/CreateText";
  formModel = this.formBuilder.group({
    Title: ['', Validators.required],
    Content: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  create(){
    if(!this.formModel.valid)
      return;
    var body = {
      Title: this.formModel.value.Title,
      Content: this.formModel.value.Content,
      Id: 0
    };
    return this.http.post(this.url, body);
  }
}
