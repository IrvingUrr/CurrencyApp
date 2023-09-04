import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/state';
import { selectExchangeRateBRL, selectExchangeRateUSD } from 'src/app/state/selectors/exchange-rate.selector';

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quote-component.html',
  styleUrls: ['./quote-component.css']
})
export class QuoteComponent {
  exchangeRateUSD$ = this.store.select(selectExchangeRateUSD);
  exchangeRateBRL$ = this.store.select(selectExchangeRateBRL);
  constructor(private store: Store<AppState>) {}
}
