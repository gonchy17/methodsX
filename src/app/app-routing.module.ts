import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeModule} from './home/home.module';
import {WithoutSaveGuard} from './shared/candeactivate/without-save.guard';
import { AboutComponent} from './shared/about/about.component';
const routes: Routes = [
  {
    path: '',redirectTo:'/home', pathMatch:'full'
  },
  {  path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  { path:'stageOne',loadChildren: () => import ('./pages/stage-one/stage-one.module').then(m=>m.StageOneModule), canDeactivate:[WithoutSaveGuard] },
  { path: 'stageTwo', loadChildren: () => import('./pages/stage-two/stage-two.module').then(m => m.StageTwoModule) },
  { path:'about', component:AboutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
