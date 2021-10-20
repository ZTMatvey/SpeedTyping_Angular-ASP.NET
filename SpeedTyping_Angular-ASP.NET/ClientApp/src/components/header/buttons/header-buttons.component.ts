import { Component } from "@angular/core";
import { ThemesDataService } from "src/themes/themes-data.service";

@Component({
    selector: "st-header-buttons",
    templateUrl: "header-buttons.component.html",
    styleUrls: ["header-buttons.component.scss"]
})
export class HeaderButtonsComponent{
    isAuthorized: boolean = false;
    constructor(readonly themesData: ThemesDataService) {}

    linkActive(){
        console.log("link active");
    }
}