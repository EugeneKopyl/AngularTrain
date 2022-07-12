import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { CardDetailComponent } from './components/card-detail/card-detail.component';

const routes: Routes = [
  { path: 'home', component: BodyComponent },
  { path: 'card', component: CardDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
