import { async } from '@angular/core/testing';
import { CartService } from './../../models/cart.service';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CartModalPage } from '../cart-modal/cart-modal.page';

@Component({
  selector: 'app-categoriestab',
  templateUrl: './categoriestab.page.html',
  styleUrls: ['./categoriestab.page.scss'],
})

export class CategoriestabPage implements OnInit {

  public show:boolean = false;
  cart = [];
  products = [];
  cartItemCount: BehaviorSubject<number>;
  cat=[];

  @ViewChild('cart', {static: false, read: ElementRef})fab: ElementRef;

  constructor(
    private cartService: CartService, private modalCtrl: ModalController,
    private http: HttpClient, private toastCtrl: ToastController) { 
      this.http.get('../assets/information.json').subscribe(res => {
        this.information = res['items'];
  
        this.information[0].open = true;
      });
    }

  @Input('category') category: any;


  information: any[];

  automaticClose = false;
  //cartService: any;
  itemQty = 0;


    

  toggleSection(index){
    this.information[index].open = !this.information[index].open;

    if (this.automaticClose && this.information[index].open){
      this.information
      .filter((itemIndex) => itemIndex !== index)
      .map(item => item.open = false);
    }
  }


  // addToCart(product, num) {
  //   // this.animateCSS('tada');
  //   if(num == 1){
  //     this.cartService.addProduct(product);
  //   }
  //   else
  //   {
  //     this.cartService.decreaseProduct(product);

  //   }
  // }

  async addToCart( num){
    if (num === 1){
      this.itemQty += 1;
      if (this.itemQty < 2){
      const toast = await this.toastCtrl.create({
        message: 'Added to the Cart',
        duration: 600
      });
      toast.present();
      }
      return;
    }
    if (this.itemQty >= 1) {
      if (num === -1) {
        this.itemQty -= 1;
        if (this.itemQty === 0){
        const toast = await this.toastCtrl.create({
          message: 'Removed from the Cart',
          duration: 600
        });
        toast.present();
        }
      }
    }
  }

  ngOnInit() {
    this.cat=this.cartService.getAllCat();
    console.log(this.cat);
  }

}
