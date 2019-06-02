import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from "@angular/core";
import { IonicModule } from "ionic-angular";
import { SimpleAppHeaderComponent } from "./simple-app-header.component";

@NgModule({
  declarations: [
    SimpleAppHeaderComponent
  ],
  imports: [
    IonicModule,
    TranslateModule
  ],
  exports: [
    SimpleAppHeaderComponent
  ]
})
export class SimpleAppHeaderModule {}
