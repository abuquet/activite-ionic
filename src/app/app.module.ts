import { LendBookPage } from './../pages/book-list/lend-book/lend-book';
import { TabsPage } from './../pages/tabs/tabs';
import { BookListPage } from './../pages/book-list/book-list';
import { LendCdPage } from './../pages/cd-list/lend-cd/lend-cd';
import { CdListPage } from './../pages/cd-list/cd-list';
import { CdsServices } from './../services/cds.services';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BooksService } from '../services/books.service';
import { OptionsPage } from '../pages/options/options';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CdListPage,
    LendCdPage,
    BookListPage,
    TabsPage,
    LendBookPage,
    OptionsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CdListPage,
    LendCdPage,
    BookListPage,
    TabsPage,
    LendBookPage,
    OptionsPage
  ],
  providers: [
    CdsServices,
    BooksService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
