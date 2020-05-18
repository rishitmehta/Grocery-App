import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriestabPageRoutingModule } from './categoriestab-routing.module';

import { CategoriestabPage } from './categoriestab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriestabPageRoutingModule
  ],
  declarations: [CategoriestabPage]
})
export class CategoriestabPageModule {}
