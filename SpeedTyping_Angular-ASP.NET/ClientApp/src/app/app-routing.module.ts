import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from 'src/components/pages/admin-panel/admin-panel.component';
import { LoginComponent } from 'src/components/pages/auth/login/login.component';
import { RegisterComponent } from 'src/components/pages/auth/register/register.component';
import { TextSelectionComponent } from 'src/components/pages/text-selection/text-selection.component';
import { TextWriteComponent } from 'src/components/pages/text-write/text-write.component';

const routes: Routes = [
  { path: "",  component: TextSelectionComponent},
  {
    path: "account",
    children:[
      { path: "login",  component: LoginComponent},
      { path: "register",  component: RegisterComponent},
    ]
  },
  { path: "text-write",  component: TextWriteComponent},
  { path: "admin-panel",  component: AdminPanelComponent},
  { path: "**", redirectTo: "" },
];
//accout -> canActivate:[AuthGuard]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
