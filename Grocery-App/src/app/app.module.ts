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
//import { AngularFireModule } from 'angularfire2';
import{ environment} from 'src/environments/environment';
//import { AngularFirestoreModule } from 'angularfire2/firestore';
import {AngularFirestoreModule }from '@angular/fire/firestore';
//import { auth } from ‘firebase’;
import {HttpClientModule} from '@angular/common/http';
import { from } from 'rxjs';
//import { CartService } from './models/cart.service';
import {CartModalPageModule} from 'src/app/pages/cart-modal/cart-modal.module'
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,HttpClientModule, CartModalPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    
    //for production change database type in firebase 
    //{ provide: FirestoreSettingsToken, useValue: {} } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

