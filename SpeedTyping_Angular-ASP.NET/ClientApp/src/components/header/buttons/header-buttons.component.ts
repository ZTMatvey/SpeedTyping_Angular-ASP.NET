import { Component } from "@angular/core";
import { UserService } from "src/components/pages/services/user.service";
import { ThemesDataService } from "src/themes/themes-data.service";

@Component({
    selector: "st-header-buttons",
    templateUrl: "header-buttons.component.html",
    styleUrls: ["header-buttons.component.scss"]
})
export class HeaderButtonsComponent{
    constructor(readonly themesData: ThemesDataService, public user: UserService) {}

    linkActive(){
        console.log("link active");
    }
}