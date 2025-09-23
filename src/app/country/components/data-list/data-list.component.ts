import { Component, input } from '@angular/core';
import { Country } from '../../interfaces/country';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'country-data-list',
  imports: [DecimalPipe, RouterLink],
  templateUrl: './data-list.component.html',
  styleUrl: './data-list.component.css'
})
export class DataListComponent {

  countries = input.required<Country[]>();

  isLoading = input<boolean>(false);
  isEmpty = input<boolean>(false);
  errorMessage = input<string | undefined | unknown>();

}
