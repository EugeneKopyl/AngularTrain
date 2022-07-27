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
      link: '/offers',
      name: 'частному клиенту',
    },
    {
      link: '/about',
      name: 'бизнесу',
    },
    {
      link: '',
      name: 'документы',
    },
    {
      link: '',
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
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
