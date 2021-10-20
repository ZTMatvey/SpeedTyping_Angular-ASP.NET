import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TextService } from 'src/components/pages/services/text.service';

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
  @Output() selected = new EventEmitter();

  onClick(){
    this.selected.emit();
  }
}
