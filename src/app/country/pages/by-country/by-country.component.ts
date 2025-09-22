import { Component } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { DataListComponent } from "../../components/data-list/data-list.component";

@Component({
  selector: 'app-by-country',
  imports: [SearchInputComponent, DataListComponent],
  templateUrl: './by-country.component.html',
  styleUrl: './by-country.component.css'
})
export class ByCountryComponent {

  onEmitSearch(value: string) {
    console.log({ value });
  }

}
