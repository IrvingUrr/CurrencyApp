import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { CurrencyService } from '../../services/currency/currency-service.service';
import { addUserPurchase, addUserPurchaseFailure, addUserPurchaseSuccess } from '../actions/user-purchase.actions';
 
@Injectable()
export class UserPurchaseEffects {

  constructor(
    private actions$: Actions,
    private currencyService: CurrencyService
    ) {}

  userPurchase$ = createEffect(() => this.actions$.pipe(
    ofType(addUserPurchase),
    exhaustMap((action) => this.currencyService.purchase(action.userPurchase.currencyIsoCode!, action.userPurchase.userId!, action.userPurchase.amount!)
      .pipe(
        map(userPurchase => { 
            return addUserPurchaseSuccess({ userPurchase }) 
        }),
        catchError((exception) => {
            return of(addUserPurchaseFailure({ error: exception.error.detail ? exception.error.detail : "Server Error" }))
        })
      ))
    )
  );
}