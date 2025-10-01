import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './features.routes';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FeaturesComponent } from './features.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [FeaturesComponent, AboutUsComponent, ContactUsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FeaturesModule {}
