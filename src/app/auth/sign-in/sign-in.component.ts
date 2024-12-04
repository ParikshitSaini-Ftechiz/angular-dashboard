import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  constructor() {}
  passwordVisible: boolean = false;
  ids: string = 'mobilePhone';
  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
  changeTab(ids: string) {
    this.ids = ids;
  }
  ngOnInit(): void {}
}
