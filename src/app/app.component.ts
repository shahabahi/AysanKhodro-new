import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private translate: TranslateService, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const lang = this.router.url.split('/')[1];
        if (lang === 'fa' || lang === 'en') {
          this.translate.use(lang);
        } else {
          this.translate.use('fa'); 
        }
      }
    });
  }
}