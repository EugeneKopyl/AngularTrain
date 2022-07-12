import { Component } from '@angular/core';
import { OfferService } from '../../services/offer.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  constructor(private service: OfferService) {}

  offers: any;

  ngOnInit(): void {
    this.service.getAllData().subscribe((res) => {
      this.offers = res;
    });
  }
}
