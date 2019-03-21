import { FeaturesComponent } from "./components/features/features.component";
import { CurrenciesComponent } from "./components/currencies/currencies.component";

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthGuard } from "src/app/guards/auth.guard";
import { CurrencyResolver } from "src/app/resolvers/currency.resolver";

const routes: Routes = [
  {
    path: "",
    canActivate: [AuthGuard],
    children: [
      {
        path: "features",
        component: FeaturesComponent
      },
      {
        path: "currencies",
        component: CurrenciesComponent,
        resolve: { currencyValuesList: CurrencyResolver },
        runGuardsAndResolvers: 'always',
        children: [
          {
            path: ":id"
          }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CurrencyResolver]
})
export class UserRoutingModule {}
