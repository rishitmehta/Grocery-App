import { UserProfile } from './Profile';
import { Injectable } from '@angular/core';

interface userProfile {
  email:string;
  password: string;
  pid:string;
  fname: string;
  lname: string;
  address: string;
  phoneNo: number;
}
@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private userProfile:userProfile
  constructor() { }
  setProfile(userProfile : userProfile) {
    this.userProfile=userProfile
  }
  getPID(){
    return this.userProfile.pid
  }
}

  
