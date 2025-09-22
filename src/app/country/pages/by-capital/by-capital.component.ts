import { Component } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { DataListComponent } from "../../components/data-list/data-list.component";

@Component({
  selector: 'app-by-capital',
  imports: [SearchInputComponent, DataListComponent],
  templateUrl: './by-capital.component.html',
  styleUrl: './by-capital.component.css'
})
export class ByCapitalComponent {

  onEmitSearch(value: string) {
    console.log({ value });
  }

}
