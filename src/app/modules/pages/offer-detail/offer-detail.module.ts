import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { OfferDetailComponent } from './offer-detail.component';
import { OfferDetailResolver } from './offer-detail.resolver';

const routes: Routes = [
  {
    path: 'offers/:id',
    component: OfferDetailComponent,
    resolve: {
      offer: OfferDetailResolver,
    },
  },
];

@NgModule({
  declarations: [OfferDetailComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfferDetailModule {}
