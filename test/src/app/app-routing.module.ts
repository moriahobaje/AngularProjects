import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/component/dashboard.component';
import { AboutComponent } from './pages/about/component/about.component';
import { ProfileComponent } from './pages/account/profile/profile.component';
import { ManageUsersComponent } from './pages/admin/manage-users/manage-users.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { CoursesComponent } from './pages/courses/component/courses.component';
import { LogoutComponent } from './pages/auth/logout/logout.component';


const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'dashboard', component: DashboardComponent},// any other request
  { path: 'about', component: AboutComponent}, 
  { path: 'account', component: ProfileComponent }, 
  { path: 'manage-user', component: ManageUsersComponent}, 
  { path: 'register', component: RegisterComponent},
  { path: 'about', component: CoursesComponent},  
  { path: '/**', redirectTo: 'login' }, 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//export const routingComponents = [LoginComponent,DashboardComponent, LogoutComponent, ManageUsersComponent, RegisterComponent, ProfileComponent ]