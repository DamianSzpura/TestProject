import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { CurrencyService } from "../services/currency.service";

@Injectable({
  providedIn: "root"
})
export class CurrencyResolver implements Resolve<any> {
  constructor(private currencyService: CurrencyService) {}

  resolve() {
    return this.currencyService.getCurrencyValuesList;
  }
}
