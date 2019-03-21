import { Injectable } from "@angular/core";
import { BitbayApiService } from "./bitbay-api.service";
import { CurrencyValues } from "../models/currency-values";
import { map } from "rxjs/operators";
import { forkJoin } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CurrencyService {
  private currencyValuesList: CurrencyValues[];
  //private currencyNames: string[];
  private usdToPlnValue: number;

  constructor(private bitbayApi: BitbayApiService) {
    this.currencyValuesList = [
      { currency: "BTC" },
      { currency: "LSK" },
      { currency: "ETH" }
    ];

    this.usdToPlnValue = 3;
  }

  public get getCurrencyValuesList() {
    return forkJoin(
      this.getCurrencyValue(this.currencyValuesList[0]),
      this.getCurrencyValue(this.currencyValuesList[1]),
      this.getCurrencyValue(this.currencyValuesList[2])
    ).pipe(
      map(() => {
        return this.currencyValuesList;
      })
    );
  }

  private getCurrencyValue(currencyValues: CurrencyValues) {
    return this.bitbayApi.get(currencyValues.currency, "PLN").pipe(
      map(
        data => {
          currencyValues.bidValue = data.bid;
          currencyValues.bidValueUSD = data.bid / this.usdToPlnValue;
        },
        error => {
          console.log(
            "Couldn't get data from " + currencyValues.currency + " and PLN"
          );
        }
      )
    );
  }
}
