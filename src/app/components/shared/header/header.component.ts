import { Component } from '@angular/core';
import { NavLinks } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  navItems: NavLinks[] = [
    {
      link: '/home',
      name: 'частному клиенту',
    },
    {
      link: '/about',
      name: 'бизнесу',
    },
    {
      link: '/home',
      name: 'документы',
    },
    {
      link: '/home',
      name: 'спецпредложения',
    },
    {
      link: '/about',
      name: 'о компании',
    },
    {
      link: '/home',
      name: 'контакты',
    },
  ];
}
