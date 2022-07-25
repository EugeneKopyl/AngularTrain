import { Component, Input } from '@angular/core';
import { OfferService } from '../../../services/offer.service';
import { Offer } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.scss'],
})
export class OfferCardComponent {
  @Input() offer: Offer = {};

  constructor(private service: OfferService) {}

  ngOnInit(): void {
    // this.service.getAllData().subscribe((res) => {
    //   this.offers = res;
    // });
  }
}
