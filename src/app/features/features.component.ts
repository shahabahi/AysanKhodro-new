import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  standalone: false,
  styleUrl: './features.component.scss',
})
export class FeaturesComponent {
  isHome = false;

  mobileMenuOpen = false;
  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.isHome =
        this.router.url === '/' || this.router.url.startsWith('/home');
    });
  }
  toggleMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
