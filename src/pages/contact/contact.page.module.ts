import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactPage } from './contact.page';
import { SimpleAppHeaderModule } from '../../components/simple-app-header/simple-app-header.module';

@NgModule({
  declarations: [
    ContactPage
  ],
  imports: [
    IonicPageModule.forChild(ContactPage),
    SimpleAppHeaderModule,
    TranslateModule
  ],
  exports: [
    ContactPage
  ]
})
export class ContactPageModule {}
