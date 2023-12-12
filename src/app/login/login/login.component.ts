import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginModel } from '../model/login.model';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    passWord: new FormControl('', [Validators.required])
  })

  constructor(private loginService: LoginService) { }

  onLogin() {
    if (this.loginForm.invalid) { return; }
    const loginModel: LoginModel = {
      email: this.emailValue,
      passWord: this.passWordValue
    } as LoginModel;
    this.loginService.login(loginModel, this.loginForm);
  }

  public get emailValue(): string {
    return this.loginForm.controls['email'].value;
  }

  public get passWordValue(): string {
    return this.loginForm.controls['passWord'].value;
  }
}
