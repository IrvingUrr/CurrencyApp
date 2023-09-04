export interface IUserPurchase {
    id?: number;
    userId?: number;
    currencyIsoCode?: string;
    amount?: number;
    purchaseDate?: Date
}