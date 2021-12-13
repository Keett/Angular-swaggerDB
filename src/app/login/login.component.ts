import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { AlertifyService } from '../services/alertify.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private accountService: AccountService, private alertifyService:AlertifyService) {}
  modelLogin: User = new User();

  ngOnInit(): void {}

  login(form: NgForm) {
    this.accountService.login(this.modelLogin);
    if(this.accountService.isLoggedIn()){
      this.alertifyService.success(this.modelLogin.userName + "adlı kişi başarıyla giriş yaptı.")
    }
    else{
      this.alertifyService.error(this.modelLogin.userName + "adlı kişi giriş yapılamadı.")
    }
    console.log(this.modelLogin.userName);
    console.log(this.modelLogin.password);
    console.log(this.accountService.isLoggedIn());
  }
}
