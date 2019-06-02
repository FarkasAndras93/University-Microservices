import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutUsPage } from './about-us.page';
import { SimpleAppHeaderModule } from '../../components/simple-app-header/simple-app-header.module';

@NgModule({
  declarations: [
    AboutUsPage
  ],
  imports: [
    IonicPageModule.forChild(AboutUsPage),
    SimpleAppHeaderModule,
    TranslateModule
  ],
  exports: [
    AboutUsPage
  ]
})
export class AboutUsPageModule {}
