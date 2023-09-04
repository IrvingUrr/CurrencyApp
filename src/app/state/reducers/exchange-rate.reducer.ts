import { createReducer, on } from '@ngrx/store';
import { IExchangeRateResponse } from "src/app/models/responses/exchange-rate.response";
import { loadedBRLExchangeRate, loadedBRLExchangeRateFailure, loadedUSDExchangeRate, loadedUSDExchangeRateFailure } from '../actions/exchange-rate.actions';

export interface ExchangeRateState {
    exchangeRate: IExchangeRateResponse | null,
    error: string | null
}

export const initialStateUSD: ExchangeRateState = {
    exchangeRate: null,
    error: null
}

export const initialStateBRL: ExchangeRateState = {
    exchangeRate: null,
    error: null
}

export const exchangeRateReducerUSD = createReducer(
    initialStateUSD, 
    on(loadedUSDExchangeRate, (state, payload: any) => {
        return { 
            ...state, 
            exchangeRate: {
                ...payload.exchangeRate
            },
            error: null
        }
    }),
    on(loadedUSDExchangeRateFailure, (state, payload: any) => {
        return { 
            ...state, 
            exchangeRate: null,
            error: payload.error
        }
    })
)

export const exchangeRateReducerBRL = createReducer(
    initialStateBRL, 
    on(loadedBRLExchangeRate, (state, payload: any) => {
        return { 
            ...state, 
            exchangeRate: {
                ...payload.exchangeRate
            },
            error: null
        }
    }),
    on(loadedBRLExchangeRateFailure, (state, payload: any) => {
        return { 
            ...state, 
            exchangeRate: null,
            error: payload.error
        }
    })
)

