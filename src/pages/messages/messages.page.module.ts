import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessagesPage } from './messages.page';
import { SimpleAppHeaderModule } from '../../components/simple-app-header/simple-app-header.module';

@NgModule({
  declarations: [
    MessagesPage
  ],
  imports: [
    IonicPageModule.forChild(MessagesPage),
    SimpleAppHeaderModule,
    TranslateModule
  ],
  exports: [
    MessagesPage
  ]
})
export class MessagesPageModule {}
