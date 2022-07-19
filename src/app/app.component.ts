import { Component } from '@angular/core';

export interface Offer {
  id?: number;
  title?: string;
  subTitle?: string;
  description?: string;
  createdDate?: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
