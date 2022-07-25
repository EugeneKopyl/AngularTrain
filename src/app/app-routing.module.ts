import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalComponent } from './components/pages/personal/personal.component';
import { OfferDetailComponent } from './components/pages/offer-detail/offer-detail.component';
import { AboutComponent } from './components/pages/about/about.component';

const routes: Routes = [
  { path: 'home', component: PersonalComponent },
  { path: 'about', component: AboutComponent },
  { path: 'offers/:id', component: OfferDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
