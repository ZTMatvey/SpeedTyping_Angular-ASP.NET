import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LogoComponent } from "./logo/logo.component";
import { CommonButtonComponent } from "./buttons/common-button/common-button.component";
import { ThemesModule } from "src/themes/themes.module";
import { RouterModule } from "@angular/router";
import { CommonPopupComponent } from './popups/common-popup/common-popup.component';
import { LinkButtonComponent } from "./buttons/link-button/link-button.component";
import { CommonTooltipComponent } from './tooltips/common-tooltip/common-tooltip.component';

@NgModule({
    declarations: [
        CommonButtonComponent,
        LogoComponent,
        CommonPopupComponent,
        LinkButtonComponent,
        CommonTooltipComponent,
        CommonTooltipComponent ],
    imports: [ CommonModule, ThemesModule, RouterModule ],
    providers: [],
    exports: [
        CommonButtonComponent,
        LogoComponent,
        LinkButtonComponent,
        CommonTooltipComponent ],
})
export class ElementsModule{
}