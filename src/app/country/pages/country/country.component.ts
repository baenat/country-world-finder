import { Component, inject } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map, of } from 'rxjs';
import { CountryService } from '../../services/country/country.service';
import { NotFoundComponent } from '../../../shared/components/not-found/not-found.component';
import { CountryInformationComponent } from "../../components/country-information/country-information.component";

@Component({
  selector: 'app-country',
  imports: [NotFoundComponent, CountryInformationComponent],
  templateUrl: './country.component.html',
  styleUrl: './country.component.css'
})
export class CountryComponent {

  countryCode = toSignal<string>(
    inject(ActivatedRoute).params.pipe(map((params) => params['code']))
  );
  countryService = inject(CountryService);

  conutryResource = rxResource({
    request: () => ({ code: this.countryCode() }),
    loader: ({ request }) => {
      if (!request.code) return of();

      return this.countryService.getCountryByCode(request.code);
    },
  })

}
