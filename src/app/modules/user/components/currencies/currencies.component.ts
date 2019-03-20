import { Component, OnInit, OnDestroy } from '@angular/core';
import { CurrencyValues } from 'src/app/models/currency-values';
import { BitbayApiService } from 'src/app/services/bitbay-api.service';
import { Subscription, interval, timer } from 'rxjs';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.less']
})
export class CurrenciesComponent implements OnInit, OnDestroy {
  currencyValuesList: CurrencyValues[];
  subscription: Subscription;
  usdToPlnValue: number;

  constructor(
      private bitbayApi: BitbayApiService
  ) { }

  ngOnInit() {
    this.initData();
/*
    this.currencyValuesList.forEach(currencyValues => {
      this.getCurrencyValue(currencyValues);
    });
*/
    const source = timer(0, 5000);
    this.subscription = source.subscribe(val =>
      this.currencyValuesList.forEach(currencyValues => {
        this.getCurrencyValue(currencyValues);
      })
    );
  }

  getCurrencyValue(currencyValues: CurrencyValues) {
    this.bitbayApi.get(currencyValues.currency, "PLN")
      .subscribe(
        (data: any) => {
            currencyValues.bidValue = data.bid;
            currencyValues.bidValueUSD = data.bid/this.usdToPlnValue;
        },
        error => {
            console.log("Couldn't get data from " + currencyValues.currency + " and PLN");
        }
      );
  }

  initData(){
    this.currencyValuesList = [
      {
        currency: "BTC"
      },
      {
        currency: "LSK"
      },
      {
        currency: "ETH"
      }
    ];
    this.usdToPlnValue = 3;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
