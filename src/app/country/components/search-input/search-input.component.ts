import { Component, effect, inject, input, linkedSignal, output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css'
})
export class SearchInputComponent {

  activatedRoute = inject(ActivatedRoute);

  placeholder = input.required<string>();
  txtValue = output<string>();

  queryParam = this.activatedRoute.snapshot.queryParamMap.get('query') ?? '';
  inputValue = linkedSignal<string>(() => this.queryParam);

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
