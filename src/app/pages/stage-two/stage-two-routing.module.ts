import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StageTwoComponent } from './stage-two.component';

const routes: Routes = [{ path: '', component: StageTwoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StageTwoRoutingModule { }
