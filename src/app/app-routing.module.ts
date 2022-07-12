import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { CardDetailComponent } from './components/card-detail/card-detail.component';
import { AboutPageComponent } from './components/about-page/about-page.component';

const routes: Routes = [
  { path: 'home', component: BodyComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'offers/:id', component: CardDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
