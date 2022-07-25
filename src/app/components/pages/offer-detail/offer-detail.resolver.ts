import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Offer } from '../../../interfaces/interfaces';
import { Observable } from 'rxjs';
import { OfferService } from '../../../services/offer.service';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class OfferDetailResolver implements Resolve<Offer> {
  constructor(private offerService: OfferService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Offer> | Promise<Offer> | Offer {
    return this.offerService.getById(route.params['id']);
  }
}
