import { Component, effect, output, signal } from '@angular/core';
import { Region } from '../../interfaces/regions';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'country-select-region',
  imports: [],
  templateUrl: './select-region.component.html',
  styleUrl: './select-region.component.css'
})
export class SelectRegionComponent {

  regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Antarctic',
  ];

  selectedRegion = signal<Region>('Americas');
  region = output<string>();

  emitRegion = effect(() => {
    const value = this.selectedRegion();
    this.region.emit(value);
  })

}
