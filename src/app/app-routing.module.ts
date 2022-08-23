import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/pages/home/home.component';
import { AboutComponent } from './modules/pages/about/about.component';
import { OfferDetailComponent } from './modules/pages/offer-detail/offer-detail.component';
import { OfferDetailResolver } from './modules/pages/offer-detail/offer-detail.resolver';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'offers',
        loadChildren: () =>
          import('./modules/pages/personal/personal.module').then(
            (m) => m.PersonalModule
          ),
      },
      {
        path: 'offers/:id',
        component: OfferDetailComponent,
        resolve: {
          offer: OfferDetailResolver,
        },
      },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
