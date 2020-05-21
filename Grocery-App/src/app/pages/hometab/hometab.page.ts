import { CartService } from './../../models/cart.service';
import { Profile } from './../../models/Profile';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router'
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-hometab',
  templateUrl: './hometab.page.html',
  styleUrls: ['./hometab.page.scss'],
})
export class HometabPage implements OnInit {

  cart = [];
  products = [];
  cartItemCount: BehaviorSubject<number>;


  constructor(
    private cartService: CartService, private modalCtrl: ModalController) { }
  
  ngOnInit() {
    this.products = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
    console.log(this.products)
    console.log(this.cart)


  }

  addToCart(product,num) {
    //this.animateCSS('tada');
    if(num==1){
      this.cartService.addProduct(product)
    }
    else
    {
      this.cartService.decreaseProduct(product)
  
    }
  }

  async openCart() {
    //this.animateCSS('bounceOutLeft', true);

    // let modal = await this.modalCtrl.create({
    //   component: CartModalPage,
    //   cssClass: 'cart-modal'
    // });
    //modal.onWillDismiss().then(() => {
      //this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft');
     // this.animateCSS('bounceInLeft');
    //});
    //modal.present();
  //}

  }
}