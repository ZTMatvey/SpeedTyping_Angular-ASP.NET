import { Directive, HostBinding } from "@angular/core";
import { ThemesDataService } from "../themes-data.service";

@Directive({
    selector: "[stSubBgStyle]"
})
export class SubBackgroundStyleDirective {
    constructor(private readonly themesData: ThemesDataService) {}
    @HostBinding("style.backgroundColor") get bgColor()
    {
        return this.themesData.subBgColor;
    }
}
@Directive({
    selector: "[stBgStyle]"
})
export class BackgroundStyleDirective {
    constructor(private readonly themesData: ThemesDataService) {}
    @HostBinding("style.backgroundColor") get bgColor()
    {
        return this.themesData.bgColor;
    }
}
@Directive({
    selector: "[stInverseBgStyle]"
})
export class InverseBackgroundStyleDirective {
    constructor(private readonly themesData: ThemesDataService) {}
    @HostBinding("style.backgroundColor") get bgColor()
    {
        return this.themesData.inverseBgColor;
    }
}