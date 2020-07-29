// Angular Core Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

// Default modules created within project
import { AppRoutingModule,} from './app-routing.module';
import { AppComponent } from './app.component';

// My modules 
import { AccountModule } from "./pages/account/account.module"; 
import { AdminModule } from "./pages/admin/admin.module"; 
import { AuthModule } from "./pages/auth/auth.module";
import { DashboardModule } from "./pages/dashboard/dashboard.module";
import { ServicesModule } from "./services/services.module";
import { CoursesModule } from "./pages/courses/courses.module"; 
import { AboutModule } from "./pages/about/about.module";
import { ToDoModule } from  "./pages/to-do/to-do.module";

// Layout components? 
import { LayoutComponent } from "./layout/layout.component";
import { AboutComponent } from "./pages/about/component/about.component";
import { CoursesComponent } from "./pages/courses/component/courses.component";
import { ToDoListComponent } from './pages/to-do/to-do-list/to-do-list.component';

import { LogoutComponent } from './pages/auth/logout/logout.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/component/dashboard.component';
import { RegisterComponent } from './pages/auth/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent, 
    ToDoListComponent, 
    CoursesComponent,
    DashboardComponent, 
    RegisterComponent,
    AboutComponent, 
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    DashboardModule,
    ServicesModule,
    CoursesModule,
    AboutModule,
    ToDoModule, 
    AdminModule, 
    AccountModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
