import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/components/pages/services/user.service';
import { TextsService } from 'src/components/pages/services/texts.service';
import { TextWriteInfoGroup } from './text-write-info-group';
import { TextWriteInfo } from 'src/components/pages/text-write-result/text-write-info';

@Component({
  selector: 'st-progress-block',
  templateUrl: './progress-block.component.html',
  styleUrls: ['../../user-profile.component.scss']
})
export class ProgressBlockComponent implements OnInit, AfterViewInit {
  @ViewChild("typesList")
  typesList?: ElementRef;
  results: TextWriteInfoGroup[] = [];
  textWiteInfoType = TextWriteInfo;
  private allWriteResults?: TextWriteInfo[];
  private lastType = 1;
  private lastActive?: Element;
  constructor(private userService: UserService, public textsServise: TextsService) { }

  ngAfterViewInit() {
  }
  ngOnInit() {
    this.userService.getAllTextWriteResults().then(res =>
    {
      this.allWriteResults = res;
      this.changeType(this.lastType);
    });
  }
  changeType(typeId: number): void {
    if(!this.allWriteResults)
    {
      this.lastType = typeId;
      return;
    }
    let target = this.typesList!.nativeElement.children[typeId - 1];
    if(target === this.lastActive)
      return;
    target.classList.add("type-element-active");
    this.lastActive?.classList.remove("type-element-active");
    this.lastActive = target;
    this.results = [];
    for(let i = 0; i < this.allWriteResults!.length; i++)
    {
      if(this.allWriteResults![i].textWriteType !== typeId)
        continue;
      let flag = false;
      for(let j = 0; j < this.results.length; j++)
      {
        let cond = this.results[j].textId === this.allWriteResults![i].textId;
        if(cond)
        {
          flag = true;
          this.results[j].group.push(this.allWriteResults![i]);
          break;
        }
      }
      if(!flag)
      {
        let group = new TextWriteInfoGroup(this.allWriteResults![i].textId);
        this.textsServise.getTextById(group.textId).then(text => group.name = text?.title ?? "");
        group.group.push(this.allWriteResults![i]);
        this.results.push(group);
      }
    }
    this.results.forEach((r)=>{
      r.group.sort(this.compareBySizeId);
    });
  }
  compareBySizeId( a: TextWriteInfo, b:TextWriteInfo ) {
    if ( a.textSize < b.textSize ){
      return -1;
    }
    return 1;
  }

}
