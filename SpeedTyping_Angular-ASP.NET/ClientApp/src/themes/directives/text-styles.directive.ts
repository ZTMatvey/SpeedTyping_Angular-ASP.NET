import { Directive, HostBinding } from "@angular/core";
import { ThemesDataService } from "../themes-data.service";

@Directive({
    selector: "[stTextStyle]"
})
export class TextStyleDirective{
    constructor(private readonly themesData: ThemesDataService) {}
    @HostBinding("style.color") get color (){
        return this.themesData.textColor;
    }
}
@Directive({
    selector: "[stInverseTextStyle]"
})
export class InverseTextStyleDirective{
    constructor(private readonly themesData: ThemesDataService) {}
    @HostBinding("style.color") get color (){
        return this.themesData.inverseTextColor;
    }
}