import { Component, OnInit } from '@angular/core';
//import { UserProfileService } from 'src/app/models/user-profile.service';
import { Profile } from 'src/app/models/profile';
import { AngularFireAuth } from '@angular/fire/auth';
// import { AngularFireDatabase } from '@angular/fire/database/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.page.html',
  styleUrls: ['./user-info.page.scss'],
})
export class UserInfoPage implements OnInit {

  profileData: AngularFirestoreCollection<Profile>
  profile = {} as Profile
  constructor(private afAuth: AngularFireAuth,
      //private afDatabase: AngularFireDatabase
      private afStore: AngularFirestore,
      public router : Router
    ) { }

  ngOnInit() {
  }
  
  createAccount(){
    this.afAuth.authState.pipe(take(1)).subscribe(auth => {
      this.afStore.doc(`profile/${auth.email}`).set({
        fname: this.profile.fname, lname: this.profile.lname,
        phoneNo: this.profile.phoneNo,
        address: this.profile.address
      }).then(() => this.router.navigate(['/home/hometab']))
    })
  }


}
