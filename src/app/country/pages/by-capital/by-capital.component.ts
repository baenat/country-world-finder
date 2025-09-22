import { Component, inject } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { DataListComponent } from "../../components/data-list/data-list.component";
import { CountryService } from '../../services/country/country.service';

@Component({
  selector: 'app-by-capital',
  imports: [SearchInputComponent, DataListComponent],
  templateUrl: './by-capital.component.html',
  styleUrl: './by-capital.component.css'
})
export class ByCapitalComponent {

  countryService = inject(CountryService);

  onEmitSearch(query: string) {
    console.log({ value: query });

    this.countryService.getCountryByCapital(query).subscribe(console.log);
  }

}
