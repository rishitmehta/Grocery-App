import { Profile } from './../../models/Profile';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'
@Component({
  selector: 'app-hometab',
  templateUrl: './hometab.page.html',
  styleUrls: ['./hometab.page.scss'],
})
export class HometabPage implements OnInit {

  profileInfo: AngularFirestoreCollection<Profile>

  itemqty= 0;

  constructor(
    private afAuth: AngularFireAuth,
    private afStore: AngularFirestore,
    public router : Router) { }
  
  ngOnInit() {

    
  const searchbar = document.querySelector('ion-searchbar');
  const items = Array.from(document.querySelector('ion-list').children);

  searchbar.addEventListener('ionInput', handleInput);

  function handleInput(event) {
    const query = event.target.value.toLowerCase();
    requestAnimationFrame(() => {
      items.forEach(item => {
        const shouldShow = item.textContent.toLowerCase().indexOf(query) > -1;
        item.style.display = shouldShow ? 'block' : 'none';
      });
    });
  }  
}

changeQty(item, change){

  if(change == 1){
    this.itemqty+=1
    return;
  }

  if(this.itemqty>=1){
    if (change == -1) {
      this.itemqty-= 1;
    } 
  }

 
  
}


  // profileInfo =this.afStore.collection(`profile\${data.uid}`);
  // ionViewWillLoad(){
  //   this.afAuth.authState.subscribe(data => {
  //     if(data && data.email && data.uid){
        
  //       message: `welcome to this ${this.profileInfo.fname} ;
        
  //     }
  //   })
  // }
}

/*const run = this.loadCtrl.create({content: 'Please wait...'});
  run.present();
  setTimeout(() => {
    let price;
    if(!item.variation) {
      price = item.product.price;
      run.dismissAll();
    }
    else {
      price = parseFloat(item.variation.price);
      run.dismissAll();
    }
    let  qty = item.qty;
    if(change < 0 && item.qty == 1){
      return;
    }
    qty = qty + change;
    item.qty = qty;
    item.amount = qty * price;
    this.cartItems[i] = item;
    this.storage.set("cart", this.cartItems).then( ()=> {
      this.toastController.create({
        message: "Cart Updated.",
        duration: 2000,
        showCloseButton: true
      }).present();
    });
    this.total = (parseFloat(this.total.toString()) + (parseFloat(price.toString()) * change));
  }, 5)
  */