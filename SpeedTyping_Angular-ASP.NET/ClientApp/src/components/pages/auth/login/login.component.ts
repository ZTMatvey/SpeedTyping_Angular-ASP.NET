import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonButtonComponent } from 'src/components/elements/buttons/common-button/common-button.component';
import { ThemesDataService } from 'src/themes/themes-data.service';
import { UserLoginService } from '../../services/user-login.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auth.components.scss'],
  providers: [ UserLoginService ]
})
export class LoginComponent implements AfterViewInit, OnInit {
  @ViewChild("form", {static: false})
  form: NgForm | undefined;
  @ViewChild("wrapper", { static: false })
  wrapper: ElementRef | undefined;
  bgColor: string;
  textColor: string;

  constructor(
    readonly themesData: ThemesDataService, 
    public userLogin: UserLoginService, 
    private router: Router,
    private user: UserService) { 
    this.bgColor = themesData?.subBgColor || "#ccc";
    this.textColor = themesData?.textColor || "#333";
  }
  onSubmit(){
    this.userLogin.login().subscribe((response: any)=>{
      localStorage.setItem("token", response.token);
      this.router.navigateByUrl("");
    },
    error=>{

    });
    this.user.update();
  }
  onSubmitBtnClick(){
    this.form?.onSubmit(undefined!);
  }
  ngOnInit(){
    if(this.user.isAuthorized)
      this.router.navigateByUrl("");
  }
  ngAfterViewInit(){
    if(this.wrapper === undefined)
        return;
    this.wrapper.nativeElement.style.setProperty("--bg-color", this.bgColor);
    this.wrapper.nativeElement.style.setProperty("--text-color", this.textColor);
  }
}
