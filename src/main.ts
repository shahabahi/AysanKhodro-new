import { loadTranslations } from '@angular/localize';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

(async () => {
  // ✅ Detect language from URL
  const urlLang = window.location.pathname.split('/')[1];
  const lang = ['fa', 'en'].includes(urlLang) ? urlLang : 'fa';

  // ✅ Store for later use
  localStorage.setItem('appLang', lang);

  // ✅ Load translations before bootstrap
  try {
    const translations = await import(`./locale/messages.${lang}.json`);
    loadTranslations(translations.default);
  } catch (err) {
    console.warn(`No translations found for ${lang}`, err);
  }

  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.error(err));
})();
