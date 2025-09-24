import { Component, inject, resource, signal } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { DataListComponent } from "../../components/data-list/data-list.component";
import { CountryService } from '../../services/country/country.service';
import { of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-by-capital',
  imports: [SearchInputComponent, DataListComponent],
  templateUrl: './by-capital.component.html',
  styleUrl: './by-capital.component.css'
})
export class ByCapitalComponent {

  countryService = inject(CountryService);
  activatedRoute = inject(ActivatedRoute);
  query = signal<string>('');

  queryParam = this.activatedRoute.data.subscribe(console.log)
  userResource = rxResource({
    request: () => ({ query: this.query() }),
    loader: ({ request }) => {
      if (!request.query) return of([]);

      return this.countryService.getCountryByCapital(request.query);
    },
  });

  // userResource = resource({
  //   request: () => ({ query: this.query() }),
  //   loader: async ({ request }) => {
  //     if (!request.query) return [];

  //     return await firstValueFrom(
  //       this.countryService.getCountryByCapital(request.query)
  //     );
  //   },
  // });

}
