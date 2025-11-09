import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

(async () => {
  // ✅ Detect language from URL
  const urlLang = window.location.pathname.split('/')[1];
  const lang = ['fa', 'en'].includes(urlLang) ? urlLang : 'fa';

  // ✅ Store for later use
  localStorage.setItem('appLang', lang);

 
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.error(err));
})();
