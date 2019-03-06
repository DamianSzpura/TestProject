import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BitbayApiService {
  constructor(
    private http: HttpClient
  ) { }

  get(firstCurrency: string, secondCurrency: string) {
      return this.http.get(environment.bitbayApiUrl + "/" + firstCurrency + "/" + secondCurrency + "/ticker.json");
  }
}
