import { Component, Input } from '@angular/core';
import { OfferService } from '../../services/offer.service';
import { Offer } from '../../app.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() offer: Offer = {};

  constructor(private service: OfferService) {}

  ngOnInit(): void {
    // this.service.getAllData().subscribe((res) => {
    //   this.offers = res;
    // });
  }
}
