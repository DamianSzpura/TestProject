import { Component, OnInit } from '@angular/core';
import { CurrencyValues } from 'src/app/models/currency-values';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.less']
})
export class CurrenciesComponent implements OnInit {

  currencyValuesList: CurrencyValues[];

  usdToPlnValue: number;
  currencyValuesPosition: number;

  constructor() { }

  ngOnInit() {
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

  onBidGet(newPlnCurrencyValues: CurrencyValues) {
    this.currencyValuesList.find(currencyValues => currencyValues.currency == newPlnCurrencyValues.currency).bidValue = (newPlnCurrencyValues.bidValue / this.usdToPlnValue);
  }
}
