import { Component, OnInit } from '@angular/core';
import { UserProfileService } from 'src/app/models/user-profile.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.page.html',
  styleUrls: ['./user-info.page.scss'],
})
export class UserInfoPage implements OnInit {

  constructor(public userProfile:UserProfileService) { }

  ngOnInit() {
  }
  

}
