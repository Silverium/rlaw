import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { CompetencesPage } from '../pages/competences/competences';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EmailComposer } from '@ionic-native/email-composer';

import { StaticData } from './services/static-data.service';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    CompetencesPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CompetencesPage,
    AboutPage,
  ],
  providers: [
    StatusBar,
    EmailComposer,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    StaticData,
  ]
})
export class AppModule { }
