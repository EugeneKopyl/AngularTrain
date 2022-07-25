import { Component, Input } from '@angular/core';
import { Offer } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.scss'],
})
export class OfferCardComponent {
  @Input() offer!: Offer;
}
