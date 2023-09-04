import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoaderInterceptor } from './interceptors/loader-interceptor';
import { provideStore } from '@ngrx/store';
import { exchangeRateReducerBRL, exchangeRateReducerUSD } from './state/reducers/exchange-rate.reducer';
import { provideEffects } from '@ngrx/effects';
import { ExchangeRateEffects } from './state/effects/exchange-rate.effect';
import { UserPurchaseEffects } from './state/effects/user-purchase.effect';
import { userPurchase } from './state/reducers/user-purchase.reducer';

export const appConfig: ApplicationConfig = {
  providers: 
  [
    provideRouter(routes),
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    importProvidersFrom(
      HttpClientModule
    ),
    provideStore({
      exchangeRateUSD: exchangeRateReducerUSD,
      exchangeRateBRL: exchangeRateReducerBRL,
      userPurchase: userPurchase
    }),
    provideEffects(ExchangeRateEffects, UserPurchaseEffects)
]
};
