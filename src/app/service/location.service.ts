import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SubjectCollection } from '../utils/subject.collections';
import { LocationModel } from '../utils/location.model';
import { finalize } from 'rxjs';
import {environment} from "../../environment/environment"; 

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  public location$: SubjectCollection<LocationModel> = new SubjectCollection<LocationModel>({});

  constructor(private httpClient: HttpClient) { }

  public fetchLocationByUserEmail(userId: string) {
    this.location$.data({} as LocationModel);
    this.location$.loading(true);
    this.location$.error(false);
    this.httpClient.get<LocationModel>(`${environment.locationUrl}/users/${userId}`)
      .pipe(finalize(() => this.location$.loading(false)))
      .subscribe({
        next: (location) => {this.location$.data(location); localStorage.setItem("locationUniqueId", location.uniqueIdentifier)},
        error: (error) => console.log(error)
      })
  }

}
