import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToastController } from '@ionic/angular';
export interface Product {
  id: number;
  name: string;
  price: number;
  amount: number;
  cat: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart = [];
    private cartItemCount = new BehaviorSubject(0);

    constructor(private toastCtrl: ToastController){}

     data: Product[] = [
      { id: 0, name: 'mango -12pc', price: 899, amount: 0, cat: 'freq' },
      { id: 1, name: 'milk-0.5L', price: 54.9, amount: 0, cat: 'freq' },
      { id: 2, name: 'bread -300g', price: 4.99, amount: 0, cat: 'freq'},
      { id: 3, name: 'tomato -0.5kg', price: 6.99, amount: 0, cat: 'freq'},

    ];

  getProducts() {
    return this.data;
  }
  getProductsByCat(catregory) {

    return this.data.filter(function (space) {
      return space.cat === catregory;
    });
  }

  getCart() {
    return this.cart;
  }

  getCartItemCount() {
    return this.cartItemCount;
  }

  addProduct(product) {
    let added = false;
    for (let p of this.cart) {
      if (p.id === product.id) {
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      this.cart.push(product);
      this.cartItemCount.next(this.cartItemCount.value + 1);
      for (let p of this.cart) {
        if (p.id === product.id) {
          p.amount += 1;
          added = true;
          break;
        }
    }
  }
  }
 
  decreaseProduct(product) { 
    for (let [index, p] of this.cart.entries() as any) {
    if (p.id === product.id) {
      if (p.amount <= 0)
      {
        break;
      }
      p.amount -= 1;
      if (p.amount === 0) {
        this.cart.splice(index, 1);
        this.cartItemCount.next(this.cartItemCount.value - 1);
      }
    }
  }
  // this.cartItemCount.next(this.cartItemCount.value - 1);
  }

  // now what
 async removeProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        this.cartItemCount.next(this.cartItemCount.value - 1);
        this.cart.splice(index, 1);
        const toast = await this.toastCtrl.create({
          message: 'Removed from the Cart',
          duration: 600
        });
        toast.present();
      }
    }
  }
}
