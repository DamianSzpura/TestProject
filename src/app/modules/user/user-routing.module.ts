import { FeaturesComponent } from './components/features/features.component';
import { CurrenciesComponent } from './components/currencies/currencies.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from 'src/app/guards/auth.guard';




const routes: Routes = [
  {
     path: '',
     canActivate: [AuthGuard],
     children: [
       {
         path: 'features',
         component: FeaturesComponent,
       },
       {
         path: 'currencies',
         component: CurrenciesComponent,
       }
     ]
   }
 ];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})
export class UserRoutingModule { }
