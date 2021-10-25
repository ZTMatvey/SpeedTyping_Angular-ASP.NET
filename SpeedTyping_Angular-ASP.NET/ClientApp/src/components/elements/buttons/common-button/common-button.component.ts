import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from "@angular/core";
import { ThemesDataService } from "src/themes/themes-data.service";

@Component({
    selector: "st-common-button",
    templateUrl: "common-button.component.html",
    styleUrls: ["common-button.component.scss"] 
})
export class CommonButtonComponent implements OnInit, AfterViewInit{
    @ViewChild("wrapper", {static: false})
    wrapper: ElementRef | undefined;
    @ViewChild("body", {static: false})
    body: ElementRef | undefined;
    @Input() isSmall: boolean = false;
    @Input() isNormalBg: boolean = false;

    mainColor?: string;
    inverseColor?: string;
    @Output() clicked = new EventEmitter();

    constructor(private readonly themesData?: ThemesDataService) {
    }
    ngOnInit()
    {
        this.mainColor = this.themesData?.textColor || "#000";
        this.inverseColor = this.themesData?.subBgColor || "#fff";
        if(this.isNormalBg && this.themesData)
            this.inverseColor = this.themesData?.bgColor;
    }

    onClick(){
        this.clicked.emit();
    }
    ngAfterViewInit(){
        if(this.wrapper === undefined)
            return;
        this.wrapper.nativeElement.style.setProperty("--btn-text-color", this.mainColor);
        this.wrapper.nativeElement.style.setProperty("--btn-inverse-text-color", this.inverseColor);
        if(this.isSmall) this.body?.nativeElement.classList.add("small-btn");
        else this.body?.nativeElement.classList.add("normal-btn");
    }
}