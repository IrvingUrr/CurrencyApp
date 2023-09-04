import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { CurrencyService } from '../../services/currency/currency-service.service';
import { ExchangeRateActionTypes, 
    loadedBRLExchangeRate, 
    loadedBRLExchangeRateFailure, 
    loadedUSDExchangeRate, 
    loadedUSDExchangeRateFailure } 
from '../actions/exchange-rate.actions';
 
@Injectable()
export class ExchangeRateEffects {

  constructor(
    private actions$: Actions,
    private currencyService: CurrencyService
    ) {}

  loadExchangeRateUSD$ = createEffect(() => this.actions$.pipe(
    ofType(ExchangeRateActionTypes.LOAD_USD_EXCHANGE_RATE),
    exhaustMap(() => this.currencyService.getExchangeRate('USD')
      .pipe(
        map(exchangeRate => { 
            return loadedUSDExchangeRate({ exchangeRate}) 
        }),
        catchError((exception) => {
            return of(loadedUSDExchangeRateFailure({ error: exception.error.detail ? exception.error.detail : exception.error.title }))
        })
      ))
    )
  );

  loadExchangeRateBRL$ = createEffect(() => this.actions$.pipe(
    ofType(ExchangeRateActionTypes.LOAD_BRL_EXCHANGE_RATE),
    exhaustMap(() => this.currencyService.getExchangeRate('BRL')
      .pipe(
        map(exchangeRate => { 
            return loadedBRLExchangeRate({ exchangeRate }) 
        }),
        catchError((exception) => {
            return of(loadedBRLExchangeRateFailure({ error: exception.error.detail ? exception.error.detail :  exception.error.title }))
        })
      ))
    )
  );
}