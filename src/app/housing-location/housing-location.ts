import { Component, input } from '@angular/core';
import { HousingLocationInfo } from '../housinglocationinfo';
@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [],
  templateUrl: './housing-location.html',
  styleUrl: './housing-location.css',
})
export class HousingLocation {

  housingLocation = input.required<HousingLocationInfo>();
}
