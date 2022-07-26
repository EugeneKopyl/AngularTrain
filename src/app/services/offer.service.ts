import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Offer } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class OfferService {
  constructor(private http: HttpClient) {}

  getOffersUrl = '/apiUrl';

  getAllData(): Observable<Offer> {
    return this.http.get<Offer>(`${this.getOffersUrl}`);
  }
  getById(id: string): Observable<Offer> {
    return this.http.get<Offer>(`${this.getOffersUrl}/${id}`);
  }
}
