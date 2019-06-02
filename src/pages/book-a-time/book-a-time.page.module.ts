import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookATimePage } from './book-a-time.page';
import { SimpleAppHeaderModule } from '../../components/simple-app-header/simple-app-header.module';

@NgModule({
  declarations: [
    BookATimePage
  ],
  imports: [
    IonicPageModule.forChild(BookATimePage),
    SimpleAppHeaderModule,
    TranslateModule
  ],
  exports: [
    BookATimePage
  ]
})
export class AboutUsPageModule {}
