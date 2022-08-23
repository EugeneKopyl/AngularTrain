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
export class PersonalResolver implements Resolve<Offer> {
  constructor(private offerService: OfferService) {}

  public resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Offer {
    return this.offerService.getAllData();
  }
}
