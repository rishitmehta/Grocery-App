import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { User } from 'src/app/models/user';
import { Profile } from 'src/app/models/profile';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  user = { } as User
  
  
  constructor(
    private afAuth: AngularFireAuth,
    private afDatabase: AngularFireDatabase,
    private afStore :AngularFirestore,
    private router: Router,
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  async Register(user: User){
    try{
      const result = await this.afAuth.createUserWithEmailAndPassword(user.email, user.password);//ac to ionic doc auth not needed 
      if(result){
        this.router.navigate(['/userinfo'])
      }
      
    }
    catch(e){
      console.error(e);
      
    }
  }

}
