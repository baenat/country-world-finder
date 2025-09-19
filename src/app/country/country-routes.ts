import { Routes } from '@angular/router';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { LayoutCountryComponent } from './layout/layout-country.component';

export const countryRoutes: Routes = [
  {
    path: '',
    component: LayoutCountryComponent,
    children: [
      {
        path: 'by-capital',
        component: ByCountryComponent,
      },
      {
        path: '**',
        redirectTo: 'by-capital',
      }
    ]
  },
];
