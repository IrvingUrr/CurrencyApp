import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserPurchase } from 'src/app/models/models/userPurchase.model';
import { IExchangeRateResponse } from 'src/app/models/responses/exchange-rate.response';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private readonly BASE_URL = "https://localhost:7175/Currency/";

  constructor(private httpClient: HttpClient) { }

  getExchangeRate(isoCode: string) : Observable<IExchangeRateResponse>{
    const url = `${this.BASE_URL}${isoCode}/ExchangeRate`
    return this.httpClient.get<IExchangeRateResponse>(url);
  }

  purchase(isoCode: string, userId: number, amount: number){
    const url = `${this.BASE_URL}${isoCode}/User/${userId}/Purchase/${amount}`
    return this.httpClient.post<IUserPurchase>(url, null);
  }
}
