import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebmailComponent } from './features/webmail/webmail.component';

const routes: Routes = [
  {
    path: ':lang',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/features.module').then((m) => m.FeaturesModule),
      },
      {
        path: 'webmail',
        component: WebmailComponent,
      },
    ],
  },
  { path: '', redirectTo: 'fa', pathMatch: 'full' },
  { path: '**', redirectTo: 'fa' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
