import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoaderService } from './services/loader/loader.service';
import { Subject } from 'rxjs';
import { CurrencyService } from './services/currency/currency-service.service';
import { AppState } from './state/state';
import { Store } from '@ngrx/store';
import { loadBRLExchangeRate, loadUSDExchangeRate } from './state/actions/exchange-rate.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  isLoading: Subject<boolean> = this.loaderService.isLoading;
  showLoader = false;

  constructor(private loaderService: LoaderService, private cdRef: ChangeDetectorRef, private currencyService: CurrencyService, private store: Store<AppState>){
    this.isLoading.subscribe(value => {
      if(value) {
        this.showLoader = true;
      } else {
        this.showLoader = false;
      }
    })
  }

  ngOnInit(){
    this.getExchangeRates();
  }

  getExchangeRates(){
    this.store.dispatch(loadUSDExchangeRate());
    this.store.dispatch(loadBRLExchangeRate());
  }

  ngAfterViewChecked()
  {
    this.cdRef.detectChanges();
  }
}
