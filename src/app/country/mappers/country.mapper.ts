import { Country } from "../interfaces/country";
import { RESTCountry } from "../interfaces/rest-country.interface";

export class CountryMapper {

  static restCountryToCountry(restCountry: RESTCountry): Country {
    const [capital] = restCountry.capital;
    return {
      cca2: restCountry.cca2,
      cca3: restCountry.cca3,
      flag: restCountry.flag,
      flagSvg: restCountry.flags.svg,
      name: restCountry.name.common,
      capital,
      population: restCountry.population,
    }
  }

  static restCountryToCountryArray(restCountrys: RESTCountry[]): Country[] {
    return restCountrys.map((country) => this.restCountryToCountry(country));
  }
}
