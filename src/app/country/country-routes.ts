import { Routes } from '@angular/router';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { LayoutCountryComponent } from './layout/layout-country.component';
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';

export const countryRoutes: Routes = [
  {
    path: '',
    component: LayoutCountryComponent,
    children: [
      {
        path: 'by-capital',
        component: ByCapitalComponent,
      },
      {
        path: 'by-country',
        component: ByCountryComponent,
      },
      {
        path: 'by-region',
        component: ByRegionComponent,
      },
      {
        path: '**',
        redirectTo: 'by-capital',
      }
    ]
  },
];
