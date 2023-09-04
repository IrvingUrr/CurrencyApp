import { ExchangeRateState, exchangeRateReducerBRL, exchangeRateReducerUSD } from './reducers/exchange-rate.reducer';
import { UserPurchaseState, userPurchase } from './reducers/user-purchase.reducer';

export interface AppState {
    exchangeRateUSD: ExchangeRateState,
    exchangeRateBRL: ExchangeRateState,
    userPurchase: UserPurchaseState
}

export const ROOT_REDUCERS = {
    exchangeRateUSD: exchangeRateReducerUSD,
    exchangeRateBRL: exchangeRateReducerBRL,
    userPurchase: userPurchase
}