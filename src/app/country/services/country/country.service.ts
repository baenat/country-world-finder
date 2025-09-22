import { inject, Injectable } from '@angular/core';
import { GeneralService } from '../../../shared/services/general/general.service';

const API_URL = `https://restcountries.com/v3.1`;

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  generalService = inject(GeneralService);

  getCountryByCapital(query: string) {
    return this.generalService.get(`${API_URL}/capital/${query}`);
  }
}
