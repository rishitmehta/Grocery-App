import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexPage } from './index.page';

const routes: Routes = [
  {
    path: '',
    component: IndexPage,
    
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/pages/welcome/welcome.module')
        .then(m => m.WelcomePageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('src/app/pages/login/login.module')
        .then(m => m.LoginPageModule)
      },
      {
        path: 'signup',
        loadChildren: () => import('src/app/pages/signup/signup.module')
        .then(m => m.SignupPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('src/app/home/home.module')
        .then(m => m.HomePageModule)
      },
      {
        path: '',
        redirectTo: '/index/welcome',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexPageRoutingModule {}
