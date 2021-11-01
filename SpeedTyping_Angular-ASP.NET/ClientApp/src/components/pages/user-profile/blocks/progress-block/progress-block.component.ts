import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/components/pages/services/user.service';
import { TextsService } from 'src/components/pages/services/texts.service';
import { TextWriteInfoGroup } from './text-write-info-group';
import { TextWriteInfo } from 'src/components/pages/text-write-result/text-write-info';

@Component({
  selector: 'st-progress-block',
  templateUrl: './progress-block.component.html',
  styleUrls: ['../../user-profile.component.scss']
})
export class ProgressBlockComponent implements OnInit {
  results: TextWriteInfoGroup[] = [];
  textWiteInfoType = TextWriteInfo;
  constructor(private userService: UserService, public textsServise: TextsService) { }

  ngOnInit(): void {
    this.userService.getAllTextWriteResults().then(res=>
      {
        for(let i = 0; i < res.length; i++)
        {
          let flag = false;
          for(let j = 0; j < this.results.length; j++)
          {
            let cond = this.results[j].textId === res[j].textId;
            if(cond)
            {
              flag = true;
              this.results[j].group.push(res[i]);
              break;
            }
          }
          if(!flag)
          {
            this.results.push(new TextWriteInfoGroup(res[i].textId));
            this.results[this.results.length - 1].group.push(res[i]);
          }
        }
        this.results.forEach((r)=>{
          this.textsServise.getTextById(r.textId).then(text=> r.name = text?.title ?? "");
          r.group.sort(this.compareBySizeId);
        });
      });
  }
  compareBySizeId( a: TextWriteInfo, b:TextWriteInfo ) {
    if ( a.textSize < b.textSize ){
      return -1;
    }
    return 1;
  }

}
