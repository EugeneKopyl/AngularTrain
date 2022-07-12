import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfferService } from '../../services/offer.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss'],
})
export class CardDetailComponent implements OnInit {
  constructor(private service: OfferService, private route: ActivatedRoute) {}

  offer: any;

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.service.getById(params['id']).subscribe((res) => {
        this.offer = res;
      });
    });
  }
}
