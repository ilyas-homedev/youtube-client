import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  settingsOpened!: boolean;
  userInfoOpened!: boolean;
  userIsLoggedIn = false;

  openSettings() {
    this.settingsOpened = !this.settingsOpened;
  }

  handleValue(value: any) {
    value = value.trim().toString();
    console.log(value);
  }

  userInfoDisplayToggle() {
    this.userInfoOpened = !this.userInfoOpened;
  }

  logIn(event: any) {
    event.preventDefault();
    this.userIsLoggedIn = true;
  }

}
