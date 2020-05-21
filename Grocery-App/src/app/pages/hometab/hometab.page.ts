import { CartService } from './../../models/cart.service';
import { Profile } from './../../models/Profile';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CartModalPage } from '../cart-modal/cart-modal.page';

@Component({
  selector: 'app-hometab',
  templateUrl: './hometab.page.html',
  styleUrls: ['./hometab.page.scss'],
})
export class HometabPage implements OnInit {

  cart = [];
  products = [];
  cartItemCount: BehaviorSubject<number>;
  // fab: any;
  @ViewChild('cart', {static: false, read: ElementRef})fab: ElementRef;
  constructor(
    private cartService: CartService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.products = this.cartService.getProducts();
    // this.products = this.cartService.getProductsByCat();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
    console.log(this.products)
    console.log(this.cart)
  }

  addToCart(product,num) {
    // this.animateCSS('tada');
    if(num == 1){
      this.cartService.addProduct(product);
    }
    else
    {
      this.cartService.decreaseProduct(product);

    }
  }

  async openCart() {
    // this.animateCSS('bounceOutLeft', true);

    let modal = await this.modalCtrl.create({
      component: CartModalPage,
      cssClass: 'cart-modal'
    });
    modal.onWillDismiss().then(() => {
      this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft')
      // this.animateCSS('bounceInLeft');
    });
    modal.present();
  }
  // animateCSS(animationName, keepAnimated = false) {
  //   const node = this.fab.nativeElement;
  //   node.classList.add('animated', animationName)

  //   //https://github.com/daneden/animate.css
  //   function handleAnimationEnd() {
  //     if (!keepAnimated) {
  //       node.classList.remove('animated', animationName);
  //     }
  //     node.removeEventListener('animationend', handleAnimationEnd)
  //   }
  //   node.addEventListener('animationend', handleAnimationEnd)
  // }
}