import { Component, input } from '@angular/core';
import { Country } from '../../interfaces/country';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'country-information',
  imports: [DecimalPipe, RouterLink],
  templateUrl: './country-information.component.html',
  styleUrl: './country-information.component.css'
})
export class CountryInformationComponent {

  country = input.required<Country>();

  getFlagUrl(code: string): string {
    return `https://flagcdn.com/${code.toLowerCase().slice(0, 2)}.svg`;
  }
}
