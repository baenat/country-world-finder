import { inject, Injectable } from '@angular/core';
import { GeneralService } from '../../../shared/services/general/general.service';
import { CountryMapper } from '../../mappers/country.mapper';
import { catchError, delay, map, Observable, of, tap, throwError } from 'rxjs';
import { RESTCountry } from '../../interfaces/rest-country.interface';
import { Country } from '../../interfaces/country';

const API_URL = `https://restcountries.com/v3.1`;

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  queryCacheCountry = new Map<string, Country[]>();

  generalService = inject(GeneralService);

  getCountryByCapital(query: string): Observable<Country[]> {
    if (this.queryCacheCountry.has(query)) {
      return of(this.queryCacheCountry.get(query) ?? []);
    }

    return this.generalService.get<RESTCountry[]>(`${API_URL}/capital/${query}`)
      .pipe(
        delay(3000),
        map(resp => CountryMapper.restCountryToCountryArray(resp)),
        tap(countries => this.queryCacheCountry.set(query, countries)),
        catchError(error => {
          console.error(`Error: ${error}`);
          return throwError(() => 'No se logro obtener información')
        })
      );
  }

  getCountryByCountry(query: string): Observable<Country[]> {
    if (this.queryCacheCountry.has(query)) {
      return of(this.queryCacheCountry.get(query) ?? []);
    }

    return this.generalService.get<RESTCountry[]>(`${API_URL}/name/${query}`)
      .pipe(
        map(resp => CountryMapper.restCountryToCountryArray(resp)),
        tap(countries => this.queryCacheCountry.set(query, countries)),
        catchError(error => {
          console.error(`Error: ${error}`);
          return throwError(() => 'No se logro obtener información')
        })
      );
  }

  getCountryByCode(code: string): Observable<Country | undefined> {
    return this.generalService.get<RESTCountry[]>(`${API_URL}/alpha/${code}`)
      .pipe(
        map(resp => CountryMapper.restCountryToCountryArray(resp)),
        map(countries => countries.at(0)),
        catchError(error => {
          return throwError(() => `No se logro obtener información con code: ${code}`)
        })
      );
  }
}
