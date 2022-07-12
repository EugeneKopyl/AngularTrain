import { Component } from '@angular/core';
import { OfferService } from '../../services/offer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  constructor(private service: OfferService, private router: Router) {}

  offers: any;

  ngOnInit(): void {
    this.service.getAllData().subscribe((res) => {
      this.offers = res;
    });
  }

  goToCardDetail() {
    this.router.navigate(['/about']);
  }
}
