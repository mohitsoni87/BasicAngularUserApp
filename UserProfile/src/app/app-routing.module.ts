import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { RegisterUserComponent } from './register-user/register-user.component';

const routes: Routes = [
  {
    path:'',
    component: HomePageComponent,
  },
  {
    path:'login',
    component: LoginComponent,
  },
  {
    path:'register',
    component: RegisterUserComponent,
  },
  {
    path:'logout',
    component: LoginComponent,
  },
  {
    path:'profile',
    component: ProfileViewComponent,

    //adding authguard so only logged in users can view their profile
    canActivate: [AuthenticationGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
