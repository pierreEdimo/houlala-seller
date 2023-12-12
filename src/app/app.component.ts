import { Component, OnInit } from '@angular/core';
import { LocationService } from './service/location.service';
import { UserToken } from './login/model/user.token';
import { NavigationService } from './service/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'seller-houlala';

  constructor(private locationService: LocationService, private navigation: NavigationService){}

  ngOnInit(): void {
    const userInfo = localStorage.getItem("userToken"); 
    if(userInfo){
      const userToken: UserToken = JSON.parse(userInfo); 
      this.locationService.fetchLocationByUserEmail(userToken.userId); 
    } else {
      this.navigation.navigateTo('/login'); 
    }
  }
}
