import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,

    children: [
      {
        path: 'hometab',
        loadChildren: () => import('src/app/pages/hometab/hometab.module')
        .then(m => m.HometabPageModule)
      },
      {
        path: 'categoriestab',
        loadChildren: () => import('src/app/pages/categoriestab/categoriestab.module')
        .then(m => m.CategoriestabPageModule)
      },
      {
        path: 'profiletab',
        loadChildren: () => import('src/app/pages/profiletab/profiletab.module')
        .then(m => m.ProfiletabPageModule)
      },
      {
        path: '',
        redirectTo: '/home/hometab',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}

