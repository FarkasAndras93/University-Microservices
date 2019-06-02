import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlanListPage } from './plan-list.page';
import { SimpleAppHeaderModule } from '../../../components/simple-app-header/simple-app-header.module';
import { PipesModule } from '../../../pipes/pipes.module';

@NgModule({
  declarations: [
    PlanListPage
  ],
  imports: [
    IonicPageModule.forChild(PlanListPage),
    SimpleAppHeaderModule,
    PipesModule
  ],
  exports: [
    PlanListPage
  ]
})
export class PlanListPageModule {}
