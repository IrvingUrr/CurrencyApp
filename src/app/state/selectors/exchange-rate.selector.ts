import { createSelector } from '@ngrx/store';
import { AppState } from '../state';
 
export const selectExchangeRateFeatureUSD = (state: AppState) => state.exchangeRateUSD;

export const selectExchangeRateUSD = createSelector(
    selectExchangeRateFeatureUSD,
    (state: any) => state
)

export const selectExchangeRateFeatureBRL = (state: AppState) => state.exchangeRateBRL;

export const selectExchangeRateBRL = createSelector(
    selectExchangeRateFeatureBRL,
    (state: any) => state
)