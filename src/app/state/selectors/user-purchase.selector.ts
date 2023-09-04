import { createSelector } from '@ngrx/store';
import { AppState } from '../state';
import { UserPurchaseState } from '../reducers/user-purchase.reducer';
 
export const selectUserPurchase = (state: AppState) => state.userPurchase;

export const selectLatestUserPurchase = createSelector(
    selectUserPurchase,
    (state: UserPurchaseState) => state
)