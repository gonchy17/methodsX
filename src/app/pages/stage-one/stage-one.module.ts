import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { StageOneRoutingModule } from './stage-one-routing.module';
import { StageOneComponent } from './stage-one.component';


@NgModule({
  declarations: [
    StageOneComponent
  ],
  imports: [
    CommonModule,
    StageOneRoutingModule,
    ReactiveFormsModule
  ]
})
export class StageOneModule { }
