import { Component, OnInit } from "@angular/core";
import { UserService } from "src/components/pages/services/user.service";
import { ThemesDataService } from "src/themes/themes-data.service";
import { ChangeDetectorRef } from "@angular/core";

@Component({
    selector: "st-header-buttons",
    templateUrl: "header-buttons.component.html",
    styleUrls: ["header-buttons.component.scss"]
})
export class HeaderButtonsComponent {
    stUser = UserService;
    constructor(readonly themesData: ThemesDataService, public user: UserService,
        private cdRef: ChangeDetectorRef) {}

    linkActive(){
        console.log("link active");
    }
}