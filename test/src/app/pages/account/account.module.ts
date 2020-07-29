import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';



import { ProfileComponent } from "./profile/profile.component";

@NgModule({
    // add part of this array any modules this module needs to operate
    imports: [
      CommonModule,
      FormsModule,

    ],
    // add here any components that are part of this module
    declarations: [
      ProfileComponent
    ]
})
export class AccountModule {}