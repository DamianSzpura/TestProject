import { Component, OnInit, ChangeDetectorRef, OnDestroy } from "@angular/core";
import { CurrencyValues } from "src/app/models/currency-values";
import { ActivatedRoute, Router } from "@angular/router";
import { ChangeDetectionStrategy } from "@angular/core";
import { Subscription, interval } from 'rxjs';

@Component({
  selector: "app-currencies",
  templateUrl: "./currencies.component.html",
  styleUrls: ["./currencies.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush // poczytac sobie o tym
})
export class CurrenciesComponent implements OnInit, OnDestroy {
  currencyValuesList: CurrencyValues[];
  subscription: Subscription;
  usdToPlnValue: number;

  constructor(private cd: ChangeDetectorRef, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.currencyValuesList = this.route.snapshot.data.currencyValuesList;
    var reloadNumber = 0;
    const source = interval(5000);
    this.subscription = source.subscribe(val => {
      reloadNumber++;
      this.router.navigate(["/currencies/" +  reloadNumber]);
      this.cd.detectChanges();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
