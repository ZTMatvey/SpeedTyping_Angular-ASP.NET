import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { InfoBlock } from './info-block.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements AfterViewInit {
  @ViewChild("profileBlcok", { static: false })
  profileBlcok?: ElementRef;
  @ViewChild("progressBlcok", { static: false })
  progressBlcok?: ElementRef;
  @ViewChild("personalizationBlcok", { static: false })
  personalizationBlcok?: ElementRef;
  @ViewChild("profileButton", { static: false })
  profileButton?: ElementRef;
  @ViewChild("progressButton", { static: false })
  progressButton?: ElementRef;
  @ViewChild("personalizationButton", { static: false })
  personalizationButton?: ElementRef;

  private blocks: InfoBlock[] = [];
  constructor(readonly user: UserService, readonly router: Router, titleService: Title) { 
    titleService.setTitle(`Провиль пользователя ${user.userName}`);
  }
  ngAfterViewInit(){
    this.addBlock("Profile", this.profileBlcok!, this.profileButton!, "block");
    this.addBlock("Progress", this.progressBlcok!, this.progressButton!, "block");
    this.addBlock("Personalization", this.personalizationBlcok!, this.personalizationButton!, "block");
    for(let i = 0; i < this.blocks.length; i++)
        this.setInactiveBlock(this.blocks[i]);
    this.setActiveBlock(this.blocks[0])
  }
  personalAccButtonClicked(blockId: number)
  {    
    for(let i = 0; i < this.blocks.length; i++)
        this.setInactiveBlock(this.blocks[i]);
    let blockToSet = this.blocks[blockId];
    this.setActiveBlock(blockToSet);
  }
  setActiveBlock(blockToSet: InfoBlock)
  {
    blockToSet.isActive = true;
    blockToSet.block.nativeElement.style.display = blockToSet.defaultDisplay;
    blockToSet.button.nativeElement.classList.add('personal-account__header-element-active');

  }
  setInactiveBlock(blockToSet: InfoBlock)
  {
    blockToSet.isActive = false;
    blockToSet.block.nativeElement.style.display = 'none';
    blockToSet.button.nativeElement.classList.remove('personal-account__header-element-active');
  }
  logoutBtnClick(){
    this.user.logout();
    this.router.navigateByUrl("");
  }
  private addBlock(name: string, block: ElementRef, button: ElementRef, defaultDisplay: string, isActive: boolean = false)
  {
    let infoBlock = new InfoBlock(name, block, button, defaultDisplay, isActive);
    this.blocks.push(infoBlock);
  }
}
