import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBannerComponent } from './header-banner/header-banner.component';
import { OfferCardComponent } from './offer-card/offer-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderBannerComponent, OfferCardComponent],
  imports: [CommonModule, RouterModule],
  exports: [CommonModule, HeaderBannerComponent, OfferCardComponent],
})
export class SharedModule {}
