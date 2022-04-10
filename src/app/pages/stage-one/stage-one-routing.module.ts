import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StageOneComponent } from './stage-one.component';

const routes: Routes = [{ path: '', component: StageOneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StageOneRoutingModule { }
