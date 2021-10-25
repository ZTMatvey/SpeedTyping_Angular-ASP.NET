import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ThemesDataService } from 'src/themes/themes-data.service';
import { UserRegistrationService } from '../../services/user-registration.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../auth.components.scss'],
  providers: [ UserRegistrationService ]
})
export class RegisterComponent implements AfterViewInit, OnInit {
  @ViewChild("wrapper", { static: false })
  wrapper: ElementRef | undefined;
  @ViewChild("form", { static: false })
  form: NgForm | undefined;

  bgColor: string;
  textColor: string;

  constructor(
    readonly themesData: ThemesDataService,
    public service: UserRegistrationService, 
    private router: Router,
    private user: UserService) { 
    this.bgColor = themesData?.subBgColor || "#ccc";
    this.textColor = themesData?.textColor || "#333";
  }
  onSubmit(){
    this.service.register()?.subscribe();
  }
  onSubmitBtnClick(){
    this.form?.onSubmit(undefined!);
  }
  ngOnInit() {
    this.service.formModel.reset();
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
