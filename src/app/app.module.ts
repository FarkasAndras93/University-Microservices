import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MyApp } from './app.component';
import { ProductProvider } from '../providers/product/product.provider';
import { ToastProvider } from '../providers/tehnical/toast/toast.provider';
import { RecipeProvider } from '../providers/recipe/recipe.provider';
import { UserProvider } from '../providers/user/user.provider';
import { StorageProvider, StorageProviderLocal } from '../providers/tehnical/storage/storage.provider';
import { APP_CONFIG_TOKEN, CONFIG_DEFAULT, prefixLocalstorage, prefixLocalStorageFactory } from './app.config';
import { PlanProvider } from '../providers/plan/plan.provider';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductProvider,
    ToastProvider,
    // GroceryListProvider,
    RecipeProvider,
    UserProvider,
    PlanProvider,
    { provide: StorageProvider, useClass: StorageProviderLocal },
    { provide: APP_CONFIG_TOKEN, useValue: CONFIG_DEFAULT },
    { provide: prefixLocalstorage, useFactory: prefixLocalStorageFactory },
  ]
})
export class AppModule {}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
