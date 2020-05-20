import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    user = { } as User;
    constructor(
      private afAuth: AngularFireAuth,
      private router: Router,
      public navCtrl: NavController,
      private alertCtrl: AlertController
      ) { }

    ngOnInit() {
    }
    async login(user: User){
      try{
      const result = await this.afAuth.signInWithEmailAndPassword(user.email, user.password);
      console.log(result);
      if (result){
        this.router.navigate(['/home/hometab']);
      }
    }
    catch (e){
      console.error(e);
      this.alertCtrl.create({
        header: 'Login Failed',
        message: 'Please Check your id and password',
        buttons: ['Okay']
      }).then(alertEl => {
        alertEl.present();
      });
    }
  }
}
