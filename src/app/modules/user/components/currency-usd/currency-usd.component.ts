import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-currency-usd',
  templateUrl: './currency-usd.component.html',
  styleUrls: ['./currency-usd.component.less']
})
export class CurrencyUsdComponent implements OnInit {
  @Input() currency: string;
  @Input() usdBid: number;

  constructor() { }

  ngOnInit() { }

}
