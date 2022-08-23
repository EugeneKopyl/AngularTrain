import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Offer } from '../../../interfaces/interfaces';
import { OfferService } from '../../../services/offer.service';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class OfferDetailResolver implements Resolve<Offer> {
  constructor(private offerService: OfferService) {}

  resolve(route: ActivatedRouteSnapshot): Offer {
    return this.offerService.getById(route.params['id']);
  }
}
