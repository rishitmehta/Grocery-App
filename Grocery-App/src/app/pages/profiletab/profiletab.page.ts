import { Profile } from './../../models/Profile';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth/auth';
import {AngularFirestore} from '@angular/fire/firestore';
@Component({
  selector: 'app-profiletab',
  templateUrl: './profiletab.page.html',
  styleUrls: ['./profiletab.page.scss'],
})
export class ProfiletabPage implements OnInit {

  constructor(private afstore :AngularFirestore, 
    //private profile: Profile
    ) { }

  ngOnInit() {
  }

  ionViewWillLoad(){
    // this.afAuth.authState.subscribe(data => {
    //   if(data & data.email & data.uid){
        
    //     message: `welcome to this `${data.email},
        
    //   }
    //})
  }
  

}
