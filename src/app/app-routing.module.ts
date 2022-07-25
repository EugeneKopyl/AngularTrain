import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalComponent } from './components/pages/personal/personal.component';
import { OfferDetailComponent } from './components/pages/offer-detail/offer-detail.component';
import { AboutComponent } from './components/pages/about/about.component';
import { OfferDetailResolver } from './components/pages/offer-detail/offer-detail.resolver';
import { PersonalResolver } from './components/pages/personal/personal.resolver';

const routes: Routes = [
  {
    path: 'home',
    component: PersonalComponent,
    resolve: {
      offers: PersonalResolver,
    },
  },
  { path: 'about', component: AboutComponent },
  {
    path: 'offers/:id',
    component: OfferDetailComponent,
    resolve: {
      offer: OfferDetailResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
