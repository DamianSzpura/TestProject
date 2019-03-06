import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BitbayApiService } from 'src/app/services/bitbay-api.service';
import { CurrencyValues } from 'src/app/models/currency-values';

@Component({
  selector: 'app-currency-pln',
  templateUrl: './currency-pln.component.html',
  styleUrls: ['./currency-pln.component.less']
})
export class CurrencyPlnComponent implements OnInit {
  @Input() currency: string;
  @Output() plnCurrencyValues = new EventEmitter<CurrencyValues>();;
      newPlnCurrencyValues: CurrencyValues = new CurrencyValues;

  constructor(
      private bitbayApi: BitbayApiService
  ) { }

  ngOnInit() {
    this.bitbayApi.get(this.currency, "PLN")
      .subscribe(
        (data: any) => {
            this.newPlnCurrencyValues.bidValue = data.bid;
            this.newPlnCurrencyValues.currency = this.currency;
            this.plnCurrencyValues.emit(this.newPlnCurrencyValues);
        },
        error => {
            console.log("Couldn't get data from " + this.currency + " and "+ "PLN");
        }
      );
  }

}
