import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { CompetencesPageModule } from './../pages/competences/competences.module';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { LegalPage } from '../pages/legal/legal';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EmailComposer } from '@ionic-native/email-composer';

import { StaticData } from './services/static-data.service';
@NgModule({
  declarations: [MyApp, HomePage, AboutPage, LegalPage],
  imports: [BrowserModule, IonicModule.forRoot(MyApp), CompetencesPageModule],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, AboutPage, LegalPage],
  providers: [
    StatusBar,
    EmailComposer,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    StaticData
  ]
})
export class AppModule {}
