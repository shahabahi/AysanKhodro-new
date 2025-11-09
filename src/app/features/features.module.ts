import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './features.routes';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule, LIGHTBOX_CONFIG, LightboxConfig } from 'ng-gallery/lightbox';

import { FeaturesComponent } from './features.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { SaleComponent } from './sale/sale.component';
import { AfterSellComponent } from './after-sell/after-sell.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    FeaturesComponent,
    AboutUsComponent,
    ContactUsComponent,
    HomeComponent,
    ProductComponent,
    ProductsComponent,
    SaleComponent,
    AfterSellComponent,
    UserLoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    RouterModule.forChild(routes),
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    GalleryModule,
    LightboxModule,
    TranslateModule
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' }
    },
    {
      provide: LIGHTBOX_CONFIG,
      useValue: {
        keyboardShortcuts: false,
        exitAnimationTime: 1000
      } as LightboxConfig
    }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FeaturesModule {}
