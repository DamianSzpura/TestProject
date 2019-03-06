import { FeaturesComponent } from './components/features/features.component';
import { CurrenciesComponent } from './components/currencies/currencies.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from 'src/app/guards/auth.guard';




const routes: Routes = [
  {
    path: 'features',
    component: FeaturesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'currencies',
    component: CurrenciesComponent,
    canActivate: [AuthGuard]
  }];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class UserRoutingModule { }
