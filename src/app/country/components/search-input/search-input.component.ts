import { Component, effect, input, output, signal } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css'
})
export class SearchInputComponent {

  placeholder = input.required<string>();
  txtValue = output<string>();
  inputValue = signal<string>('')

  onSearch(value: string) {
    if (!value) return;

    this.txtValue.emit(this.toLowerCase(value));
  }

  debounceTime = effect((onCleanup) => {
    const value = this.inputValue();

    const timeout = setTimeout(() => {
      this.txtValue.emit(this.toLowerCase(value));
    }, 300);

    onCleanup(() => {
      clearTimeout(timeout);
    })
  });

  toLowerCase = (value: string) => value.toLowerCase().trim();

}
