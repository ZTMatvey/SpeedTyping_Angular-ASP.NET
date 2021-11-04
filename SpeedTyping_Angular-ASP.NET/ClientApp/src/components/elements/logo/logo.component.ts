import { AfterViewInit, Component, ElementRef, Input, ViewChild, } from "@angular/core";

@Component({
    selector: "st-logo",
    templateUrl: "./logo.component.html",
    styleUrls: ["./logo.component.scss"]
})
export class LogoComponent implements AfterViewInit{
    @ViewChild("image")
    image?: ElementRef;
    @Input() isNormalImage = true;

    ngAfterViewInit(){
        if(!this.image)
            return;
        if(this.isNormalImage)
            this.image.nativeElement.classList.add("normal-image");
        else
            this.image.nativeElement.classList.add("inversed-image");
    }
}