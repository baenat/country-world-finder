import { inject, Injectable } from '@angular/core';
import { GeneralService } from '../../../shared/services/general/general.service';
import { CountryMapper } from '../../mappers/country.mapper';
import { map, Observable } from 'rxjs';
import { RESTCountry } from '../../interfaces/rest-country.interface';
import { Country } from '../../interfaces/country';

const API_URL = `https://restcountries.com/v3.1`;

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  generalService = inject(GeneralService);

  getCountryByCapital(query: string): Observable<Country[]> {
    return this.generalService.get<RESTCountry[]>(`${API_URL}/capital/${query}`)
      .pipe(
        map(resp => CountryMapper.restCountryToCountryArray(resp))
      );
  }
}
