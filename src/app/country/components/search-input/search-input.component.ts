import { Component, input, output } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css'
})
export class SearchInputComponent {

  placeholder = input.required<string>();
  txtValue = output<string>();

  onSearch(value: string) {
    if (!value) return;

    this.txtValue.emit(value);
  }

}
