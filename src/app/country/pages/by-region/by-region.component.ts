import { Component, inject, signal } from '@angular/core';
import { DataListComponent } from "../../components/data-list/data-list.component";
import { SelectRegionComponent } from "../../components/select-region/select-region.component";
import { CountryService } from '../../services/country/country.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';

@Component({
  selector: 'app-by-region',
  imports: [DataListComponent, SelectRegionComponent],
  templateUrl: './by-region.component.html',
  styleUrl: './by-region.component.css'
})
export class ByRegionComponent {

  countryService = inject(CountryService);
  region = signal<string>('');

  countryResource = rxResource({
    request: () => ({ query: this.region() }),
    loader: ({ request }) => {
      if (!request.query) return of([]);

      return this.countryService.getCountryByRegion(request.query)
    }
  });

}
