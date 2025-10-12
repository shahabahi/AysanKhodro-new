import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './language-switcher.component.html',
})
export class LanguageSwitcherComponent {
  languages = [
    { code: 'fa', label: 'فارسی' },
    { code: 'en', label: 'English' }
  ];
  currentLang = 'fa';

  constructor(private router: Router, private route: ActivatedRoute) {
    // Detect current language from route
    this.route.paramMap.subscribe(params => {
      const lang = params.get('lang');
      if (lang && ['fa', 'en'].includes(lang)) {
        this.currentLang = lang;
        localStorage.setItem('appLang', lang);
      }
    });
  }

  async switch(lang: string) {
    if (lang === this.currentLang) return;
    localStorage.setItem('appLang', lang);
    await this.router.navigate([`/${lang}`]);
    window.location.reload();
  }
}
