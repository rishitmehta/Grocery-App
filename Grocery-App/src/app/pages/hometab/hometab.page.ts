import { Profile } from './../../models/Profile';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'
@Component({
  selector: 'app-hometab',
  templateUrl: './hometab.page.html',
  styleUrls: ['./hometab.page.scss'],
})
export class HometabPage implements OnInit {

  profileInfo: AngularFirestoreCollection<Profile>

  constructor(private afAuth: AngularFireAuth,
    private afStore: AngularFirestore,
    public router : Router) { }
  
  ngOnInit() {
  }
  // profileInfo =this.afStore.collection(`profile\${data.uid}`);
  // ionViewWillLoad(){
  //   this.afAuth.authState.subscribe(data => {
  //     if(data && data.email && data.uid){
        
  //       message: `welcome to this ${this.profileInfo.fname} ;
        
  //     }
  //   })
  // }
}
