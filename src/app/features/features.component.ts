import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
  "standalone": false,
})
export class FeaturesComponent {
  isHome = false;
  mobileMenuOpen = false;
  currentLang = 'fa';

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects;
        this.isHome = url === `/${this.currentLang}` || url === `/${this.currentLang}/home`;
      }
    });

    this.route.paramMap.subscribe(params => {
      const lang = params.get('lang');
      if (lang) this.currentLang = lang;
    });
  }

  toggleMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  navigateTo(path: string) {
    this.router.navigate([`/${this.currentLang}/${path}`]);
    this.mobileMenuOpen = false;
  }
}
