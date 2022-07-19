import { Component, Input } from '@angular/core';
import { OfferService } from '../../services/offer.service';
import { Router } from '@angular/router';
import { Offer } from '../../app.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() offer: Offer = {};

  constructor(private service: OfferService, private router: Router) {}

  ngOnInit(): void {
    // this.service.getAllData().subscribe((res) => {
    //   this.offers = res;
    // });
  }

  goToCardDetail() {
    this.router.navigate(['/about']);
  }
}
