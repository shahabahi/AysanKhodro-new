import { Routes } from '@angular/router';
import { FeaturesComponent } from './features.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { SaleComponent } from './sale/sale.component';
import { AfterSellComponent } from './after-sell/after-sell.component';

export const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'sale', component: SaleComponent },
      { path: 'services', component: AfterSellComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'product/:id', component: ProductComponent },
    ],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
