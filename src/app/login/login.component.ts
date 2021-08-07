import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private accountService: AccountService) {}
  modelLogin: User = new User();

  ngOnInit(): void {}
  login(form: NgForm) {
    this.accountService.login(this.modelLogin);
    console.log(this.modelLogin.userName);
    console.log(this.modelLogin.password);
    console.log(this.accountService.isLoggedIn());
  }
}
