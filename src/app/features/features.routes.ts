import { Routes } from '@angular/router';
import { FeaturesComponent } from './features.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

export const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
];
