import { Injectable } from '@angular/core';
import { loadTranslations } from '@angular/localize';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  constructor(private router: Router) {}

  async switchLanguage(lang: string) {
    const translations = await import(`../../locale/messages.${lang}.json`);
    loadTranslations(translations.default);
    localStorage.setItem('appLang', lang);
    await this.router.navigate([`/${lang}`]);
    window.location.reload();
  }
}
