import { Component } from '@angular/core';
import { Offer } from '../../../interfaces/interfaces';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-body',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
})
export class PersonalComponent {
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private route: ActivatedRoute) {}

  offers: Offer[] = [];

  ngOnInit(): void {
    this.route.data.pipe(takeUntil(this.destroy$)).subscribe((data) => {
      this.offers = data['offers'];
    });
  }

  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
