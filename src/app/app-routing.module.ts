import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const Routes: Routes = [
  {
    path: '',
    loadChildren: 'src/app/modules/user/user.module#UserModule'
  },
  {
    path: '**',
    redirectTo: '/404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(Routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
