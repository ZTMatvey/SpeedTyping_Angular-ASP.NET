import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TextService } from 'src/components/pages/services/text.service';
import { TextsService } from 'src/components/pages/services/texts.service';

@Component({
  selector: 'st-admin-panel-text-card',
  templateUrl: './text-card.component.html',
  styleUrls: [
    '../../../text-selection/text-card/text-card.component.scss',
    './text-card.component.scss'
  ]
})
export class AdminPanelTextCardComponent {
  @Input() text?: TextService;

  constructor(private router: Router, private textsService: TextsService) {  }
  editBtnClick(){ 
    this.router.navigate(['/admin-panel/text-create'], {
        queryParams:{
            "id": this.text?.id
        }
    });
  }
  deleteBtnClick(){
    if(!this.text)
      return;
    this.textsService.deleteTextById(this.text?.id);
  }
}
