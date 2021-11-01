import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'st-common-tooltip',
  templateUrl: './common-tooltip.component.html',
  styleUrls: ['./common-tooltip.component.scss']
})
export class CommonTooltipComponent {
  @Input() helpMessage: string = "";
}
