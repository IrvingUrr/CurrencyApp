import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteComponent } from '../quote/quote-component';
import { PurchaseFormComponent } from './purchase-form/purchase-form.component';

@Component({
  selector: 'app-purchase',
  standalone: true,
  imports: [CommonModule, QuoteComponent, PurchaseFormComponent],
  templateUrl: './purchase-component.html',
  styleUrls: ['./purchase-component.css']
})
export class PurchaseComponent {

}
