import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/profile';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {
  
  profile = {} as Profile
  constructor(
    private afDatabase: AngularFireDatabase,
    private afStore: AngularFirestore,
    private router: Router,
    public navCtrl: NavController
  ){}
  ngOnInit() {}

  async Register(profile: Profile){
    try{
      // this.afAuth.authState.subscribe( auth => {
      //   this.afDatabase.list(`profile/${auth.email}`).push(this.profile)
      //   .then(() =>this.router.navigate[('HomePage')])}
    }
    catch(e){
       console.error(e);
    }
    
    }
}
