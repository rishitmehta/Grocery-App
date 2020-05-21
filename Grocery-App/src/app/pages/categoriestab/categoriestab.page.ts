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
      .filter((item, itemIndex) => itemIndex !== index)
      .map(item => item.open = false);
    }
  }

  async buyItem(category){
    const toast = await this.toastCtrl.create({
      message: 'Added to the Cart: ${category.name}',
      duration: 600
    });
    toast.present();
  }

  ngOnInit() {
  }

}
