import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup,  ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/state';
import { addUserPurchase } from 'src/app/state/actions/user-purchase.actions';
import { IUserPurchase } from 'src/app/models/models/userPurchase.model';
import { selectLatestUserPurchase } from 'src/app/state/selectors/user-purchase.selector';
import { selectExchangeRateBRL, selectExchangeRateUSD } from 'src/app/state/selectors/exchange-rate.selector';

@Component({
  selector: 'app-purchase-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './purchase-form.component.html',
  styleUrls: ['./purchase-form.component.css']
})
export class PurchaseFormComponent {

  latestUserPurchase$ = this.store.select(selectLatestUserPurchase);
  exchangeRateUSD$ = this.store.select(selectExchangeRateUSD);
  exchangeRateBRL$ = this.store.select(selectExchangeRateBRL);
  
  purchaseForm = new FormGroup({
    userId: new FormControl(1, { validators: [Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(1)], nonNullable: true }),
    currency: new FormControl('USD', { validators: [Validators.required], nonNullable: true }),
    amount: new FormControl(500, { validators: [Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(1)], nonNullable: true })
  })

  get purchaseFormControl() {
    return this.purchaseForm.controls;
  }

  constructor(private store: Store<AppState>){ }

  onSubmit(){
    if(this.purchaseForm.valid){
      
      let newUserPurchase: IUserPurchase = {
        userId: this.purchaseFormControl.userId.value,
        currencyIsoCode: this.purchaseFormControl.currency.value,
        amount: this.purchaseFormControl.amount.value
      }
      this.store.dispatch(addUserPurchase ({ userPurchase: newUserPurchase }));
    }
  }
}
