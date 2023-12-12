import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LocationService } from 'src/app/service/location.service';
import { NavigationService } from 'src/app/service/navigation.service';
import { LocationModel } from 'src/app/utils/location.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  location$: Observable<LocationModel> = new Observable<LocationModel>();

  constructor(public locationService: LocationService,
              private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.location$ = this.locationService.location$.data$;
  }

  navigateTo(locationUniqueId: string){
    this.navigationService.navigateTo(`/dashboard/${locationUniqueId}`); 
  }
}
