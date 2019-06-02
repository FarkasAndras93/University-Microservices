import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from "@angular/core";
import { IonicModule } from "ionic-angular";

import { IconedMenuItemComponent } from "./iconed-menu-item.component";

@NgModule({
  declarations: [
    IconedMenuItemComponent
  ],
  imports: [
    IonicModule,
    TranslateModule
  ],
  exports: [
    IconedMenuItemComponent
  ]
})
export class IconedMenuItemModule {}
