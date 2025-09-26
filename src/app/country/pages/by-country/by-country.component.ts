import { Component, inject, resource, signal } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { DataListComponent } from "../../components/data-list/data-list.component";
import { of } from 'rxjs';
import { CountryService } from '../../services/country/country.service';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-by-country',
  imports: [SearchInputComponent, DataListComponent],
  templateUrl: './by-country.component.html',
  styleUrl: './by-country.component.css'
})
export class ByCountryComponent {

  countryService = inject(CountryService);
  query = signal<string>('');

  userResource = rxResource({
    request: () => ({ query: this.query() }),
    loader: ({ request }) => {
      if (!request.query) return of([]);

      return this.countryService.getCountryByCountry(request.query)
    }
  });

  // userResource = resource({
  //   request: () => ({ query: this.query() }),
  //   loader: async ({ request }) => {
  //     if (!request.query) return [];

  //     return firstValueFrom(
  //       this.countryService.getCountryByCountry(request.query)
  //     )
  //   }
  // })

  onEmitSearch(value: string) {
    this.query.set(value);
  }

}
