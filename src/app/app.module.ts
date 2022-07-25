import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// material imports
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OfferCardComponent } from './components/shared/offer-card/offer-card.component';
import { FormComponent } from './components/shared/form/form.component';
import { OfferDetailComponent } from './components/pages/offer-detail/offer-detail.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { PersonalComponent } from './components/pages/personal/personal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { OfferService } from './services/offer.service';
import { AboutComponent } from './components/pages/about/about.component';
import { HeaderBannerComponent } from './components/shared/header-banner/header-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    OfferCardComponent,
    FormComponent,
    OfferDetailComponent,
    HeaderComponent,
    FooterComponent,
    PersonalComponent,
    AboutComponent,
    HeaderBannerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    HttpClientModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
  ],
  providers: [OfferService],
  bootstrap: [AppComponent],
})
export class AppModule {}
