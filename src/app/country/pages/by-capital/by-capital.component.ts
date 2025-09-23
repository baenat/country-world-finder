import { Component, inject, signal } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { DataListComponent } from "../../components/data-list/data-list.component";
import { CountryService } from '../../services/country/country.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital',
  imports: [SearchInputComponent, DataListComponent],
  templateUrl: './by-capital.component.html',
  styleUrl: './by-capital.component.css'
})
export class ByCapitalComponent {

  countryService = inject(CountryService);

  isLoading = signal(false);
  hasError = signal<string | null>(null);
  countries = signal<Country[]>([]);

  onEmitSearch(query: string) {
    if (this.isLoading()) return;

    this.isLoading.set(true);
    this.hasError.set(null);

    this.countryService.getCountryByCapital(query).subscribe({
      next: (resp) => {
        this.countries.set(resp);
      },
      error: (err) => {
        this.hasError.set(err);
        this.countries.set([]);
      },
      complete: () => this.isLoading.set(false)
    });
  }

}
