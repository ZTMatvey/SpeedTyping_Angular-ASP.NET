import { Component, Input } from '@angular/core';
import { ThemesDataService } from 'src/themes/themes-data.service';
import { CommonButtonComponent } from '../common-button/common-button.component';

@Component({
  selector: 'st-link-button',
  templateUrl: './link-button.component.html',
  styleUrls: ['./link-button.component.scss', '../common-button/common-button.component.scss']
})
export class LinkButtonComponent extends CommonButtonComponent {

  @Input() link: string = "";

  constructor(themesData?: ThemesDataService) {
    super(themesData);
  }
}
