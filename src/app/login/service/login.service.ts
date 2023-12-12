import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { LoginModel } from '../model/login.model';
import { FormGroup } from '@angular/forms';
import { NavigationService } from 'src/app/service/navigation.service';
import { UserToken } from '../model/user.token';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private navigateService: NavigationService) { }

  public login(login: LoginModel, loginForm: FormGroup) {
    return this.http.post<UserToken>("https://api.houlala.store/authentication/users/login", login)
      .pipe()
      .subscribe({
        next: (response: UserToken) => {
          localStorage.setItem('userToken', JSON.stringify(response)); 
          this.navigateService.navigateTo(`/dashboard`); 
          loginForm.reset();
        },
        error: (error) => {
          console.log(error);
        }
      });
  }
}
