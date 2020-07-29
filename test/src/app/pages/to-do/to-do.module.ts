import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';



import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ServicesModule } from 'src/app/services/services.module';
import { AccountModule } from '../account/account.module';
import { AdminModule } from '../admin/admin.module';
import { AuthModule } from '../auth/auth.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { CoursesModule } from '../courses/courses.module';
import { AboutModule } from '../about/about.module';

@NgModule({
    // add part of this array any modules this module needs to operate
    imports: [
      CommonModule,
      FormsModule,
    ServicesModule,
    AccountModule,
    AdminModule,
    AuthModule,
    DashboardModule,
    CoursesModule,
    AboutModule,
    ToDoModule,

    ],
    // add here any components that are part of this module
    declarations: [
      ToDoListComponent
    ],
    exports: [
      ToDoListComponent
    ]
})
export class ToDoModule {}