import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlanNewPage } from './plan-new.page';
import { SimpleAppHeaderModule } from '../../../components/simple-app-header/simple-app-header.module';
import { PipesModule } from '../../../pipes/pipes.module';

@NgModule({
  declarations: [
    PlanNewPage
  ],
  imports: [
    IonicPageModule.forChild(PlanNewPage),
    SimpleAppHeaderModule,
    PipesModule
  ],
  exports: [
    PlanNewPage
  ]
})
export class PlanNewPageModule {}
