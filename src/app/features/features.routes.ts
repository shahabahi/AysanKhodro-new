import { Routes } from '@angular/router';
import { FeaturesComponent } from './features.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'product', component: ProductComponent },
    ],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
