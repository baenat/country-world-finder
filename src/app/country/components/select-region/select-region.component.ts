import { Component, effect, inject, linkedSignal, output, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Region } from '../../interfaces/regions';

const validateQueryParams = (queryParam: string): Region => {
  queryParam = queryParam.toLowerCase().trim();
  const validRegions: Record<string, Region> = {
    'africa': 'Africa',
    'americas': 'Americas',
    'asia': 'Asia',
    'europe': 'Europe',
    'oceania': 'Oceania',
    'antarctic': 'Antarctic',
  }

  return validRegions[queryParam] ?? 'Americas';
}

@Component({
  selector: 'country-select-region',
  imports: [],
  templateUrl: './select-region.component.html',
  styleUrl: './select-region.component.css'
})
export class SelectRegionComponent {

  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Antarctic',
  ];

  queryParam = this.activatedRoute.snapshot.queryParamMap.get('region') ?? '';
  selectedRegion = linkedSignal<Region>(() => validateQueryParams(this.queryParam));
  region = output<string>();

  emitRegion = effect(() => {
    const value = this.selectedRegion();
    this.updateQueryParams(value);
    this.region.emit(value);
  });

  updateQueryParams(value: string) {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {
        region: value
      }
    });
  }

}
