import { createAction, props } from '@ngrx/store';
import { IExchangeRateResponse } from 'src/app/models/responses/exchange-rate.response';

export enum ExchangeRateActionTypes {
    LOAD_USD_EXCHANGE_RATE = '[Exchange Rate] Load USD SUCCESS',
    LOAD_USD_EXCHANGE_RATE_SUCCESS = '[Exchange Rate] Loaded USD SUCCESS',
    LOAD_USD_EXCHANGE_RATE_FAILURE = '[Exchange Rate] Loaded USD FAILURE',
    LOAD_BRL_EXCHANGE_RATE = '[Exchange Rate] Load BRL SUCCESS',
    LOAD_BRL_EXCHANGE_RATE_SUCCESS = '[Exchange Rate] Loaded BRL SUCCESS',
    LOAD_BRL_EXCHANGE_RATE_FAILURE = '[Exchange Rate] Loaded BRL FAILURE'
}

export const loadUSDExchangeRate = createAction (
    ExchangeRateActionTypes.LOAD_USD_EXCHANGE_RATE
    );

export const loadedUSDExchangeRate = createAction (
    ExchangeRateActionTypes.LOAD_USD_EXCHANGE_RATE_SUCCESS,
    props<{ exchangeRate: IExchangeRateResponse }>()
    );

export const loadedUSDExchangeRateFailure = createAction (
    ExchangeRateActionTypes.LOAD_USD_EXCHANGE_RATE_FAILURE,
    props<{ error: any }>()
    );
    
export const loadBRLExchangeRate = createAction (
    ExchangeRateActionTypes.LOAD_BRL_EXCHANGE_RATE
    );

export const loadedBRLExchangeRate = createAction (
    ExchangeRateActionTypes.LOAD_BRL_EXCHANGE_RATE_SUCCESS,
    props<{ exchangeRate: IExchangeRateResponse }>()
    );

export const loadedBRLExchangeRateFailure = createAction (
    ExchangeRateActionTypes.LOAD_BRL_EXCHANGE_RATE_FAILURE,
    props<{ error: any }>()
    );