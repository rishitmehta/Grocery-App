import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
//by kishan - firebase configuration
import { AngularFireModule} from '@angular/fire';
import{ environment} from 'src/environments/environment';
import { UserProfileService } from './models/user-profile.service';
//import {AngularFirestoreModule }from '@angular/fire/firestore'
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase)],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    UserProfileService
    //for production change database type in firebase 
    //{ provide: FirestoreSettingsToken, useValue: {} } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}