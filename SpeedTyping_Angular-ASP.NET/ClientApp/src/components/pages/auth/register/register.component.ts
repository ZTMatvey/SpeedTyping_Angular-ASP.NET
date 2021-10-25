import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ThemesDataService } from 'src/themes/themes-data.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../auth.components.scss']
})
export class RegisterComponent implements AfterViewInit, OnInit {
  @ViewChild("wrapper", { static: false })
  wrapper: ElementRef | undefined;
  @ViewChild("form", { static: false })
  form: ElementRef | undefined;

  bgColor: string;
  textColor: string;

  constructor(readonly themesData: ThemesDataService, public service: UserService) { 
    this.bgColor = themesData?.subBgColor || "#ccc";
    this.textColor = themesData?.textColor || "#333";
  }
  onSubmit(){
    
  }
  onSubmitBtnClick(){
    this.service.register()?.subscribe(
      (res: any) => {
      },
      err => {
        console.log(err);
      }
    );;
    this.form?.nativeElement.submit();
  }
  ngOnInit() {
    this.service.formModel.reset();
  }

  ngAfterViewInit(){
    if(this.wrapper === undefined)
        return;
    this.wrapper.nativeElement.style.setProperty("--bg-color", this.bgColor);
    this.wrapper.nativeElement.style.setProperty("--text-color", this.textColor);
  }
}
