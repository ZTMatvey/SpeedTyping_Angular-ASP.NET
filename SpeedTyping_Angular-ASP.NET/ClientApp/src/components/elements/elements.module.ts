import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LogoComponent } from "./logo/logo.component";
import { CommonButtonComponent } from "./buttons/common-button/common-button.component";
import { ThemesModule } from "src/themes/themes.module";
import { RouterModule } from "@angular/router";
import { CommonPopupComponent } from './popups/common-popup/common-popup.component';

@NgModule({
    declarations: [
        CommonButtonComponent,
        LogoComponent,
        CommonPopupComponent],
    imports: [ CommonModule, ThemesModule, RouterModule ],
    providers: [],
    exports: [
        CommonButtonComponent,
        LogoComponent],
})
export class ElementsModule{
}