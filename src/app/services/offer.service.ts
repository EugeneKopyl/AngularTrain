import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OfferService {
  constructor(private _http: HttpClient) {}

  getOffersUrl = 'http://localhost:8083/test/offers/';

  getAllData(): Observable<any> {
    return this._http.get(`${this.getOffersUrl}`);
  }
}
