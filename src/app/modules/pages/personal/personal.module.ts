import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { PersonalComponent } from './personal.component';
import { PersonalResolver } from './personal.resolver';

const routes: Routes = [
  {
    path: 'offers',
    component: PersonalComponent,
    resolve: {
      offers: PersonalResolver,
    },
  },
];

@NgModule({
  declarations: [PersonalComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalModule {}
