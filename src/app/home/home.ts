import { Component, inject } from '@angular/core';
import { HousingLocation } from '../housing-location/housing-location';
import { HousingLocationInfo } from '../housinglocationinfo';
import { HousingService } from '../housing-service';

@Component({
  selector: 'app-home',
  //the next line i had to add for some reason but not in instructions
  standalone: true,
  imports: [HousingLocation],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  
  housingLocationList: HousingLocationInfo[] = [];
  housingService: HousingService = inject(HousingService);
  constructor(){
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
