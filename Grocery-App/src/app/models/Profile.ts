import {Injectable } from'@angular/core';
import { User } from 'src/app/models/user';

 export interface Profile {
    email:string;
    password: string;
    name: string;
    address: string;
    phoneNo: number;
 }
 @Injectable()
 export class UserProfile
 {
     private user:User

    setEmail(){
    return this.user.email ;
    }

 }
