import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriestabPage } from './categoriestab.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriestabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriestabPageRoutingModule {}
