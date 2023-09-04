import { createReducer, on } from '@ngrx/store';
import { IUserPurchase } from 'src/app/models/models/userPurchase.model';
import { addUserPurchase, addUserPurchaseFailure, addUserPurchaseSuccess } from '../actions/user-purchase.actions';

export interface UserPurchaseState {
    userPurchase: IUserPurchase | null,
    error: string | null
}

export const initialStateUserPurchase: UserPurchaseState = {
    userPurchase: null,
    error: null
}

export const userPurchase = createReducer(
    initialStateUserPurchase, 
    on(addUserPurchaseSuccess, (state, payload: any) => {
        return { ...state, 
            userPurchase: 
            { 
                ...payload.userPurchase
            }, 
            error: null }
    }),
    on(addUserPurchaseFailure, (state, payload: any) => {
        return { ...state, userPurchase: null, error: payload.error }
    })
)
