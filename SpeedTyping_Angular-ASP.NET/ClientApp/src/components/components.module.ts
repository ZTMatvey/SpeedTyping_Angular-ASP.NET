import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeaderComponent } from "./header/header.component";
import { HeaderButtonsComponent } from "./header/buttons/header-buttons.component";
import { ElementsModule } from "./elements/elements.module";
import { ThemesModule } from "src/themes/themes.module";
import { RouterModule } from "@angular/router";
import { TextSelectionComponent } from "./pages/text-selection/text-selection.component";
import { LoginComponent } from "./pages/auth/login/login.component";
import { RegisterComponent } from "./pages/auth/register/register.component";
import { LinkButtonComponent } from "./elements/buttons/link-button/link-button.component";
import { PopupComponent } from './pages/text-selection/popup/popup.component';
import { TextCardComponent } from './pages/text-selection/text-card/text-card.component';
import { TextWriteComponent } from './pages/text-write/text-write.component';
import { TimerComponent } from './pages/text-write/timer/timer.component';
import { CpmMeterComponent } from './pages/text-write/cpm-meter/cpm-meter.component';
import { TextBoxComponent } from './pages/text-write/text-box/text-box.component';
import { TextSettingsComponent } from './pages/text-selection/popup/views/text-settings/text-settings.component';
import { TextStatisticComponent } from './pages/text-selection/popup/views/text-statistic/text-statistic.component';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { TextsComponent } from './pages/admin-panel/texts/texts.component';
import { UsersComponent } from './pages/admin-panel/users/users.component';
import { AdminPanelTextCardComponent } from "./pages/admin-panel/texts/text-card/text-card.component";

@NgModule({
    declarations: [ HeaderButtonsComponent, HeaderComponent, TextSelectionComponent, LoginComponent, RegisterComponent, LinkButtonComponent, PopupComponent, TextCardComponent, TextWriteComponent, TimerComponent, CpmMeterComponent, TextBoxComponent, TextSettingsComponent, TextStatisticComponent, AdminPanelComponent, TextsComponent, UsersComponent, AdminPanelTextCardComponent ],
    imports: [ CommonModule, ElementsModule, ThemesModule, RouterModule ],
    providers: [  ],
    exports: [ HeaderComponent ],
})
export class ComponentsModule{
}