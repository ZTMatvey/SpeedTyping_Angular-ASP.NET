import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ThemesDataService } from 'src/themes/themes-data.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent {

  constructor(readonly themesData: ThemesDataService, titleService: Title) { 
    titleService.setTitle("Панель администратора");
  }
}
