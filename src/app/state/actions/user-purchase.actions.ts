import { createAction, props } from '@ngrx/store';
import { IUserPurchase } from 'src/app/models/models/userPurchase.model';

export enum UserPurchaseActionTypes {
    ADD_USER_PURCHASE = '[User Purchase] Add Purchase',
    ADD_USER_PURCHASE_SUCCESS = '[User Purchase] Add Purchase Success',
    ADD_USER_PURCHASE_FAILURE = '[User Purchase] Add Purchase Failure',
}

export const addUserPurchase = createAction (
    UserPurchaseActionTypes.ADD_USER_PURCHASE,
    props<{ userPurchase: IUserPurchase }>()
    );

export const addUserPurchaseSuccess = createAction (
    UserPurchaseActionTypes.ADD_USER_PURCHASE_SUCCESS,
    props<{ userPurchase: IUserPurchase }>()
    );

export const addUserPurchaseFailure = createAction (
    UserPurchaseActionTypes.ADD_USER_PURCHASE_FAILURE,
    props<{ error: any }>()
    );