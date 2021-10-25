import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { TextService } from '../../services/text.service';

@Component({
  selector: 'st-text-card',
  templateUrl: './text-card.component.html',
  styleUrls: ['./text-card.component.scss']
})
export class TextCardComponent {
  @Input() text?: TextService;
  @Output() selected = new EventEmitter();
  
  onClick(){
    this.selected.emit();
  }
}
