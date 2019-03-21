import { FeaturesComponent } from "./components/features/features.component";
import { CurrenciesComponent } from "./components/currencies/currencies.component";

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { UserRoutingModule } from "./user-routing.module";
import { CurrencyPlnComponent } from "./components/currency-pln/currency-pln.component";
import { CurrencyUsdComponent } from "./components/currency-usd/currency-usd.component";

@NgModule({
  declarations: [
    FeaturesComponent,
    CurrenciesComponent,
    CurrencyPlnComponent,
    CurrencyUsdComponent
  ],
  imports: [CommonModule, UserRoutingModule, ReactiveFormsModule]
})
export class UserModule {}
