import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { AboutComponent } from './component/about.component';

@NgModule({
    // add part of this array any modules this module needs to operate
    imports: [
      CommonModule,

    ],
    // add here any components that are part of this module
    declarations: [
      AboutComponent
    ],
    exports: [
      AboutComponent
    ]
})
export class AboutModule {}