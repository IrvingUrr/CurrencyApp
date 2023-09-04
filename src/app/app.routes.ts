import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'quote',
        loadComponent: () => import('./components/quote/quote-component').then(t => t.QuoteComponent),
    },
    {
        path: 'purchase',
        loadComponent: () => import('./components/purchase/purchase-component').then(t => t.PurchaseComponent)
    },
    { path: '**', redirectTo: ''}
];
