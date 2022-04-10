import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StageTwoRoutingModule } from './stage-two-routing.module';
import { StageTwoComponent } from './stage-two.component';


@NgModule({
  declarations: [
    StageTwoComponent
  ],
  imports: [
    CommonModule,
    StageTwoRoutingModule
  ]
})
export class StageTwoModule { }
