import { Component, Input } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { ThemesDataService } from 'src/themes/themes-data.service';
import { CommonButtonComponent } from '../common-button/common-button.component';

@Component({
  selector: 'st-link-button',
  templateUrl: './link-button.component.html',
  styleUrls: ['./link-button.component.scss', '../common-button/common-button.component.scss']
})
export class LinkButtonComponent  extends CommonButtonComponent {

  @Input() link: string = "";
  private isSameUrl: boolean = false;

  constructor(private router: Router, themesData?: ThemesDataService) {
    super(themesData);
    router.events.subscribe((event: Event) => {
        if (event instanceof NavigationEnd) {
            let isCurrentSameUrl = this.link === event.url;
            if(isCurrentSameUrl)
                this.toggleClass();
            else if(this.isSameUrl)
                this.toggleClass();
            this.isSameUrl = isCurrentSameUrl;
        }
    })
  }
}
