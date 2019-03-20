import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BitbayApiService } from 'src/app/services/bitbay-api.service';
import { CurrencyValues } from 'src/app/models/currency-values';

@Component({
  selector: 'currency-pln',
  templateUrl: './currency-pln.component.html',
  styleUrls: ['./currency-pln.component.less']
})
export class CurrencyPlnComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
