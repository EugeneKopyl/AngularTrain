import { Component } from '@angular/core';
import { Offer } from '../../../interfaces/interfaces';
import { OfferService } from '../../../services/offer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
})
export class PersonalComponent {
  constructor(private route: ActivatedRoute) {}

  offers: Offer[] = [];

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.offers = data['offers'];
    });
  }
}
