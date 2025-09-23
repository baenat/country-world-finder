import { Component, input } from '@angular/core';
import { Country } from '../../interfaces/country';
import { DecimalPipe  } from '@angular/common';

@Component({
  selector: 'country-data-list',
  imports: [DecimalPipe],
  templateUrl: './data-list.component.html',
  styleUrl: './data-list.component.css'
})
export class DataListComponent {

  countries = input.required<Country[]>();

}
