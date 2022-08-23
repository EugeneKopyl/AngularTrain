import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Offer } from '../../../interfaces/interfaces';
import {Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'app-offer-detail',
  templateUrl: './offer-detail.component.html',
  styleUrls: ['./offer-detail.component.scss'],
})
export class OfferDetailComponent implements OnInit {
  private destroy$: Subject<boolean> = new Subject<boolean>();

  offer: Offer;

  constructor(private route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.route.data
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
      this.offer = data['offer'];
    });
  }

  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
