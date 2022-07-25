import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Offer } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class OfferService {
  constructor(private http: HttpClient) {}

  getOffersUrl = 'http://localhost:8083/test/offers/';

  getAllData(): Observable<any> {
    return this.http.get(`${this.getOffersUrl}`);
  }
  getById(id: string): Observable<any> {
    return this.http.get(`${this.getOffersUrl}/${id}`);
  }
}
