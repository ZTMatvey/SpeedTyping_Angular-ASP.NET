import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SubBackgroundStyleDirective, BackgroundStyleDirective, InverseBackgroundStyleDirective } from "./directives/background-styles.directive";
import { InverseTextStyleDirective, TextStyleDirective } from "./directives/text-styles.directive";

@NgModule({
    declarations: [ 
        SubBackgroundStyleDirective, BackgroundStyleDirective, InverseBackgroundStyleDirective,
        TextStyleDirective, InverseTextStyleDirective ],
    imports: [ CommonModule ],
    providers: [],
    exports: [
        SubBackgroundStyleDirective, BackgroundStyleDirective, InverseBackgroundStyleDirective,
        TextStyleDirective, InverseTextStyleDirective ],
})
export class ThemesModule{
}