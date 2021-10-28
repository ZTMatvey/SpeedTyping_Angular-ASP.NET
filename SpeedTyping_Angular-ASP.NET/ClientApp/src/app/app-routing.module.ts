import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from 'src/components/pages/admin-panel/admin-panel.component';
import { CreateTextComponent } from 'src/components/pages/admin-panel/create-text/create-text.component';
import { LoginComponent } from 'src/components/pages/auth/login/login.component';
import { RegisterComponent } from 'src/components/pages/auth/register/register.component';
import { AuthGuard } from 'src/components/pages/guards/auth.guard';
import { TextSelectionComponent } from 'src/components/pages/text-selection/text-selection.component';
import { TextWriteResultComponent } from 'src/components/pages/text-write-result/text-write-result.component';
import { TextWriteComponent } from 'src/components/pages/text-write/text-write.component';
import { UserProfileComponent } from 'src/components/pages/user-profile/user-profile.component';

const routes: Routes = [
  { path: "",  component: TextSelectionComponent},
  { path: "account", redirectTo: "" },
  { path: "account",
    children:[
      { path: "login",  component: LoginComponent },
      { path: "register",  component: RegisterComponent }
    ]},
  { path: "text-write",  component: TextWriteComponent },
  { path: "text-write-result",  component: TextWriteResultComponent },
  { path: "user-profile",  component: UserProfileComponent },
  { path: "admin-panel", canActivate: [AuthGuard], data: {permittedRoles:["admin"] }, component: AdminPanelComponent },
  { path: "admin-panel", canActivate: [AuthGuard], data: {permittedRoles:["admin"] },
    children:[
      { path: "text-create", component: CreateTextComponent }
    ]},
  { path: "**", redirectTo: "" },
];
//, canActivate: [AuthGuard]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
