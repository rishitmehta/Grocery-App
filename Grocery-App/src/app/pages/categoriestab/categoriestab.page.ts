import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-categoriestab',
  templateUrl: './categoriestab.page.html',
  styleUrls: ['./categoriestab.page.scss'],
})

export class CategoriestabPage implements OnInit {

  @Input('category') category: any;


  information: any[];

  automaticClose = false;
  cartService: any;
  itemQty = 0;

  constructor(private http: HttpClient, private toastCtrl: ToastController) {
    this.http.get('../assets/information.json').subscribe(res => {
      this.information = res['items'];

      this.information[0].open = true;
    });
   }

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
  }

}
